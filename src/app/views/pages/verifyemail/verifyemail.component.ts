import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login/authservice/login-register.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss'],
  providers:[LoginRegisterService]
})
export class VerifyemailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
