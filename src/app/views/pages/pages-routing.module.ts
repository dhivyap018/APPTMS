import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { VerifycodeComponent } from './verifycode/verifycode.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent,
    data:{
      title:'Forgotpassword'
    }
      },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'phoneNumber',
    component: PhonenumberComponent,
    data: {
      title: 'Phone'
    }
  },
  {
    path: 'verifycode',
    component: VerifycodeComponent,
    data: {
      title: 'Phonecode'
    }
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}



