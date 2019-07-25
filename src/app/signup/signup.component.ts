import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

name:String;
  email;
  password:String;
  address;
  city;
  constructor(private us: RegisterService) { }

  ngOnInit() {
  }
  addData() {
    if(this.password.length<10){
      alert('Password Must be atleast 10 Characters long');
    }
    else
    {
      this.us.register(this.name,this.address,this.city,this.password,this.email);
      alert('Registeration Complete');
    }
    console.log(this.password.length)
    // alert(this.password.lenght);
    // console.log(this.name)
}

}