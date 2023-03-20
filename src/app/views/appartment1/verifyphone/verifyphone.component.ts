import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifyphone',
  templateUrl: './verifyphone.component.html',
  styleUrls: ['./verifyphone.component.scss']
})
export class VerifycodeComponent implements OnInit {
otp!:string;
verify:any;
  constructor() { }
config={
  allowNumbersOnly:true,
  length:6,
  ispasswordInput:false,
  disableAutoFocus:false,
  placeholder:'',
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

  }
}
