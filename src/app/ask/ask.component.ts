import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  content1=false;
  content2=false;
  content3=false;
  content4=false;
  content5=false;
  content6=false;
  content7=false;
  content8=false;
  content9=false;
  content10=false;
  content11=false;

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
  toggleContent3()
  {
    this.content3 = ! this.content3;
  }
  toggleContent4()
  {
    this.content4 = ! this.content4;
  }
  toggleContent5()
  {
    this.content5 = ! this.content5;
  }
  toggleContent6()
  {
    this.content6 = ! this.content6;
  }
  toggleContent7()
  {
    this.content7 = ! this.content7;
  }
  toggleContent8()
  {
    this.content8 = ! this.content8;
  }
  toggleContent9()
  {
    this.content9 = ! this.content9;
  }
  toggleContent10()
  {
    this.content10 = ! this.content10;
  }
  toggleContent11()
  {
    this.content11 = ! this.content11;
  }
}
