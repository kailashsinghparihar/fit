import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,email,phone,comm) {
      const obj = {name,email,phone,comm};
      this
          .http
          .post(`${this.url}/addcomment`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/viewcomment`)
      );
  }
  upData(id,comm) {
      const obj = { comm };
      this
          .http
          .post(`${this.url}/updatecomment/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/deletecomment/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email,phone,comm ,id) {
 
      const obj = {
          name: name,
          email:email,
          phone:phone,
          comm:comm
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    // commentAdd(name,email,phone,comm)
    // {
    //   let obj = { name,email,phone,comm};
    //   this.http.post('localhost:3000/addcomment',obj).subscribe(res => console.log(res));
    // }
    // commentView(){
    //   return this.http.get('localhost:3000/viewcomment');
    // }
}