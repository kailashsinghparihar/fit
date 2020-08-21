import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signdata',
  templateUrl: './signdata.component.html',
  styleUrls: ['./signdata.component.css']
})
export class SigndataComponent implements OnInit {

  arr;
  // name;
  constructor(private us: RegisterService) { }
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; console.log(data)  });
}
 
delData(id) {
  this.us.delData(id);
}

}
