import { Component} from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {

   employees: any[]=[
     {
       "fname":"kailash",
       "lname":"singh",
       "age":123
     },
     {
      "fname":"kailash",
      "lname":"singh",
      "age":123
    },
    {
      "fname":"kailash",
      "lname":"singh",
      "age":123
    },
    {
      "fname":"kailash",
      "lname":"singh",
      "age":123
    },
   ]

  

}
