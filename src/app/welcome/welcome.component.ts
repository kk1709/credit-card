import { Component } from '@angular/core';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  name : string;
  age: number;
  creditCardObj: any;
  creditCards = ['Master', 'Visa', 'Amex'];
  constructor(private service: CreditCardService){
    //call service and get the name
    this.name = "Michael";
    this.age = 15;
    service.getName().subscribe(res => {
      this.creditCardObj = res;
      console.log(this.creditCardObj);
    })
  }

  buttonClick(){
    alert('Button clicked!!');
  }


  
}
