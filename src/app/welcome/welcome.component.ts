import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  name : string;
  age: number;
  creditCards = ['Master', 'Visa', 'Amex'];
  constructor(){
    //call service and get the name
    this.name = "Michael";
    this.age = 15;
  }

  buttonClick(){
    alert('Button clicked!!');
  }


  
}
