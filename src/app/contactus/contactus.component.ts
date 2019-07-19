import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name;
  email;
  phone;
  comm;

  constructor(private us: UsersService) { }

  ngOnInit() {
  }
addData(){
  this.us.addData(this.name,this.email,this.phone,this.comm);
}
}






