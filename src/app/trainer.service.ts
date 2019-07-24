import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,email,exp,cat) {
      const obj = {name,email,exp,cat};
      this
          .http
          .post(`${this.url}/addtrainer`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/viewtrainer`)
      );
  }
  upData(id,email,exp,cat) {
      const obj = { email,exp,cat };
      this
          .http
          .post(`${this.url}/updatetrainer/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/deletetrainer/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email,exp,cat,id) {
 
      const obj = {
          name: name,
          email:email,
          exp:exp,
          cat:cat
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
  
}


 