import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appartment1RoutingModule } from './appartment1-routing.module';
import { AprListComponent } from './apr-list/apr-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AdduserComponent } from './adduser/adduser.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersserviceService } from './services/usersservice.service';
import { FlatinfoComponent } from './flatinfo/flatinfo.component';
import { FlatserviceService } from './services/flatservice.service';
import { UserviewComponent } from './userview/userview.component';
import { FlatviewComponent } from './flatview/flatview.component';
import { ImageComponent } from './image/image.component';
import{AngularFireStorageModule} from '@angular/fire/compat/storage';
import { provideStorage ,getStorage} from '@angular/fire/storage';
import { PaymodeComponent } from './paymode/paymode.component';
import { PaylistComponent } from './paylist/paylist.component';
import { PaylistserviceService } from './services/paylistservice.service';
import { LoginRegisterService } from '../pages/login/authservice/login-register.service';
import { LoginComponent } from '../pages/login/login.component';
import { Payment2021Component } from './payment2021/payment2021.component';
import { Paychild2021Component } from './paychild2021/paychild2021.component';
import { Payinfo2021Service } from './services/payinfo2021.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgOtpInputModule } from 'ng-otp-input';
import { Invoicechild2022Component } from './invoicechild2022/invoicechild2022.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { ViewrecieptComponent } from './viewreciept/viewreciept.component';
import { UserdeitComponent } from './userdeit/userdeit.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AprListComponent,
    UserDetailsComponent,
    InvoiceListComponent,
    PaymentComponent,
    AdduserComponent,
    FlatdetailsComponent,  
    FlatinfoComponent,
    AdduserComponent,
    UserviewComponent,
    FlatviewComponent,
    ImageComponent,
    PaymodeComponent,
    PaylistComponent,
    Payment2021Component,
    Paychild2021Component,
    Invoicechild2022Component,
     SearchfilterPipe,
     ViewinvoiceComponent,
     ViewrecieptComponent,
     UserdeitComponent 
    
  ],
  providers:[UsersserviceService,FlatserviceService,PaylistserviceService,Payinfo2021Service],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
     CommonModule,
    //  BrowserAnimationsModule,
    // BrowserModule,
    Appartment1RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
   provideStorage(()=>getStorage()),
NgOtpInputModule,
NgxPaginationModule,
OrderModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatFormFieldModule,
 MatInputModule

  ],
 

})
export class Appartment1Module { }
