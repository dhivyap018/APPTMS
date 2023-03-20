import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{LoginRegisterService}from'../login/authservice/login-register.service';
import { FormControl, FormGroup } from '@angular/forms';
interface IDatePickerForm {
  datePicker: FormControl<Date | undefined | null>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit{ 

email:string='';
  password:string=''

  constructor(public auth:LoginRegisterService) { }
 

ngOnInit():void{

}

 login(){  
  if(this.email==''){ 
        alert('please enter email');
     return;
    }
      if(this.password==''){
      alert('please enter password');
      return;
     }
     this.auth.login(this.email,this.password);
      this.email='';
    this.password='';
  }
  SignInwithGoogle(){
    this.auth.googleSignIn();
  }
 
}

