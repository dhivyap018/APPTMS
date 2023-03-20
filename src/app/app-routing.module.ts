import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ForgotpasswordComponent } from './views/pages/forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './views/pages/verifyemail/verifyemail.component';
import { ImageComponent } from './views/appartment1/image/image.component';
import { PaymodeComponent } from './views/appartment1/paymode/paymode.component';
import { PhonenumberComponent } from './views/pages/phonenumber/phonenumber.component';
import { VerifycodeComponent } from './views/pages/verifycode/verifycode.component';

const routes: Routes = [
  {
    path: '',
  component: LoginComponent,
  data: {
    title: 'Home'
  },
},


{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      
      {
        path:'appartment1',
        loadChildren:()=>
        import('./views/appartment1/appartment1.module').then((m)=>m.Appartment1Module)
      },
      
    
    
      {
        path:'tenant',
        loadChildren:()=>
        import('./views/tenant/tenant.module').then((m)=>m.TenantModule)
      },
      
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      
      
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
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
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'verifyemail',
    component: VerifyemailComponent,
    data: {
      title: 'verifyemail'
    }
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: {
      title: 'Forgotpassword'
    }
  },
  {
    path: 'phonenumber',
    component: PhonenumberComponent,
    data: {
      title: 'mobileOTP'
    }
  },
  {
    path: 'verifycode',
    component: VerifycodeComponent,
    data: {
      title: 'verifyOTP'
    }
  },
 
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
