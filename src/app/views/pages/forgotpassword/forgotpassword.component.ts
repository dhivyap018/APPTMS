import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login/authservice/login-register.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
  providers:[LoginRegisterService]
})
export class ForgotpasswordComponent implements OnInit {
email:string='';
  constructor(private auth:LoginRegisterService) { }

  ngOnInit(): void{

}
sendlink(){
this.auth.forgotpassword(this.email);
this.email='';
}
}

