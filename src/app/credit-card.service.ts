import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  public getName(){
    //return "Michael2";
    return this.http.get('assets/credit-card-data.json');
  }

}
