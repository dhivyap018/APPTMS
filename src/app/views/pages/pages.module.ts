import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LoginRegisterService } from './login/authservice/login-register.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { UsersserviceService } from '../appartment1/services/usersservice.service';
import { FlatserviceService } from '../appartment1/services/flatservice.service';
import { PaylistserviceService } from '../appartment1/services/paylistservice.service';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { VerifycodeComponent } from './verifycode/verifycode.component';
import { NgOtpInputModule } from 'ng-otp-input';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ForgotpasswordComponent,
    VerifyemailComponent,
    PhonenumberComponent,
    VerifycodeComponent
  ],
  providers:[UsersserviceService,FlatserviceService,PaylistserviceService,LoginRegisterService,AngularFirestore],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    provideStorage(()=>getStorage()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    AngularFireAuthModule,
   DashboardRoutingModule,
   HttpClientModule,
   BrowserModule,
   NgOtpInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  
})
export class PagesModule {
}
