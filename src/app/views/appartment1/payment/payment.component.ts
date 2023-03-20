import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../../pages/login/authservice/login-register.service';
import firebase from'firebase/compat/app';
import"firebase/auth";
import"firebase/firestore";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
 
  constructor(private router:Router,private auth:AngularFireAuth) { }
  ngOnInit(): void {
    
  }
  
    }
    
    
    

 
  

  
//  public day=new Date();
//   infoReceived1:string[]=[];
//   infoReceived2:string[]=[];
//   infoReceived3:string[]=[];

//   getInfoFromService1(){
//     this.infoReceived1=this._Payment.getInfo1();
//   }
//   getInfoFromService2(){
//     this.infoReceived2=this._Payment.getInfo2();
//   }
//   getInfoFromService3(){
//     this.infoReceived3=this._Payment.getInfo3();
//   }
  
  
  


 

 
  



