import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:String;
  password:String;
  constructor(private us: RegisterService) { }

  ngOnInit() {
  }
  signIn(){
    this.us.signIn(this.email,this.password);
  }

}
