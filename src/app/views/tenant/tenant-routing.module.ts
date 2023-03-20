import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    data:{
      title:'Tenant',
    },
   
          
     children:[
      
      {
        path:'',
        pathMatch:'full',
        redirectTo:'profile',
      },
      {
        path:'profile',
        component:ProfileComponent,
        data:{
          title:"profile"
        
        }
      },
    
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
