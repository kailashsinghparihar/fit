import { Component, OnInit } from '@angular/core';
import {TrainerService} from "../trainer.service";
@Component({
  selector: 'app-urtrainer',
  templateUrl: './urtrainer.component.html',
  styleUrls: ['./urtrainer.component.css']
})
export class UrtrainerComponent implements OnInit {

  arr;
  // name;
  constructor(private us :TrainerService) { }

  ngOnInit() {
    this.getData();
  }
   getData(){
     this.us.getData().subscribe(data => {this.arr = data});
   }
   delData(id){
     this.us.delData(id);
   }
}

 