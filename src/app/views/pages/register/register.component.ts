import { Component } from '@angular/core';
import { LoginRegisterService } from '../login/authservice/login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:string='';
  password:string=''

  constructor(public auth:LoginRegisterService) { }
  register(){  
    if(this.email==''){ 
          alert('please enter email');
       return;
      }
        if(this.password==''){
        alert('please enter password');
        return;
       }
       this.auth.register(this.email,this.password);
        this.email='';
      this.password='';
    }
  
}
