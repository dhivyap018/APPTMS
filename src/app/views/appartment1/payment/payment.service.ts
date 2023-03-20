import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  info1:string[]=["Name:Dhivya","Rent_amount:20000","Monthly_bills:2000","penality:0","Total_payable:20000","Balance:0"]
  info2:string[]=["Name:vanitha","Rent_amount:30000","Monthly_bills:3000","penality:0","Total_payable:30000","Balance:0"]
  info3:string[]=["Name:janu","Rent_amount:40000","Monthly_bills:4000","penality:0","Total_payable:40000","Balance:0"]
getInfo1():string[]
{
return this.info1;
}
getInfo2():string[]
{
return this.info2;
}
getInfo3():string[]
{
return this.info3;
}

}
//   constructor() { }
//

