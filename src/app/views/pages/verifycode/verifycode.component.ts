import { Component, OnInit } from '@angular/core';
import firebase from'firebase/compat/app';
import"firebase/auth";
import"firebase/firestore";
import { Router } from '@angular/router';
@Component({
  selector: 'app-verifycode',
  templateUrl: './verifycode.component.html',
  styleUrls: ['./verifycode.component.scss']
})
export class VerifycodeComponent implements OnInit {
otp!:string;
verify:any;
  constructor(private router:Router) { }
config={
   allowNumbersOnly:true,
 length:6,
   ispasswordInput:false,
   disableAutoFocus:false,
   phoneNumber:true,
  idToken: true,
  verificationcode:true,
  inputstyles:{
    width:'50px',
height:'50px'
  }
}
  ngOnInit(){
    this.verify=JSON.parse(localStorage.getItem('verificationId')||'{}')
    console.log(this.verify);
  }
  onotpChange(otpcode:any){
    this.otp=otpcode;
    console.log(this.otp)
  }
  handleClick(){
var cretentials=firebase.auth.PhoneAuthProvider.credential(this.verify,
this.otp
  );
  firebase.auth().signInWithCredential(cretentials).then((response)=>{
    console.log(response);
    localStorage.setItem('user-data',JSON.stringify(response));
    this.router.navigate(['/dashboard'])
  },err=>{
    alert(err.message)
  })
  }
  }

