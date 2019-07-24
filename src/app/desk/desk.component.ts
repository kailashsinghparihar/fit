import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
  name;
  email;
  exp;
  cat;

  constructor(private us: TrainerService) { }

  ngOnInit() {
  }
addData(){
  this.us.addData(this.name,this.email,this.exp,this.cat);
}
}






