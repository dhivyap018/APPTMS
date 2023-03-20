import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantRoutingModule } from './tenant-routing.module';
import { ProfileComponent } from './component/profile/profile.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ProfileserviceService } from 'src/Tenantservice/profileservice.service';
// import{ProfileService}from'../services/profile.service'

@NgModule({
  declarations: [
    ProfileComponent
  ],
  providers:[ProfileserviceService],
  imports: [
    CommonModule,
    TenantRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ]
})
export class TenantModule { }
