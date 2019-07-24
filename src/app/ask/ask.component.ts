import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  content1=false;
  content2=false;

  constructor() { }

  ngOnInit() {
  }
  toggleContent1()
  {
    this.content1 = ! this.content1;
  }
  toggleContent2()
  {
    this.content2 = ! this.content2;
  }

}
