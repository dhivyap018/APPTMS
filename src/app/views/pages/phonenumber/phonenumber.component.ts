import { Component, OnInit } from '@angular/core';
 import firebase from'firebase/compat/app';
import"firebase/auth";
import"firebase/firestore";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../login/authservice/login-register.service';
var config={
  projectId: 'aptmms-e6514',
  appId: '1:551245114744:web:28a2c3e759b6a4f2f1ac8d',
  databaseURL: 'https://aptmms-e6514-default-rtdb.firebaseio.com',
  storageBucket: 'aptmms-e6514.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyB-0sd3b1zo89Abh_Niti8V37BcHCJcDZc',
  authDomain: 'aptmms-e6514.firebaseapp.com',
  messagingSenderId: '551245114744',
}
@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.scss'],
  providers:[LoginRegisterService]
})
export class PhonenumberComponent implements OnInit {
phoneNumber:any;
recapchaVerifier:any;
  constructor(private router:Router,private auth:AngularFireAuth) { }

  ngOnInit(): void {
    firebase.initializeApp(config);
  }
getOtp(){
this.recapchaVerifier=new firebase.auth.RecaptchaVerifier('sign-in-button',{size:'invisible'})
firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.recapchaVerifier).then((confirmationResult)=>{
  console.log(confirmationResult);
  localStorage.setItem('VerificationId',JSON.stringify(confirmationResult.verificationId))
  this.router.navigate(['/verifycode']);
},err=>{
alert(err.message)
})
setTimeout(()=>{
  window.location.reload()
},5000)
}
}

