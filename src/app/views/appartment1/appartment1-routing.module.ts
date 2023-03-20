import { NgModule } from '@angular/core';
import { RouterEvent, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AprListComponent } from './apr-list/apr-list.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { FlatinfoComponent } from './flatinfo/flatinfo.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserviewComponent } from './userview/userview.component';
import{ImageComponent} from'./image/image.component'
import { FlatviewComponent } from './flatview/flatview.component';
import { PaymodeComponent } from './paymode/paymode.component';
import { PaylistComponent } from './paylist/paylist.component'   
import { Payment2021Component } from './payment2021/payment2021.component';
import { Paychild2021Component } from './paychild2021/paychild2021.component';
import { VerifycodeComponent } from '../pages/verifycode/verifycode.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { Invoicechild2022Component } from './invoicechild2022/invoicechild2022.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { ViewrecieptComponent } from './viewreciept/viewreciept.component';
import { UserdeitComponent } from './userdeit/userdeit.component';
       
const routes: Routes = [ 
  {
    path:'',
    data:{
      title:'Appartment',
    },
   
          
     children:[
      
      {
        path:'',
        pathMatch:'full',
        redirectTo:'user-details',
      },
      {
        path:'user-details',
        component:UserDetailsComponent,
        data:{
          title:"userinfo"
        
        }
      },
     
      {
        path:'adduser/:id',
       component:AdduserComponent,
       data:{
        title:"user"
      }
    },
    {
      path:'adduser',
     component:AdduserComponent,
     data:{
      title:"user"
    }
  },
   {
     path:'userdeit',
    component:UserdeitComponent,
    data:{
    title:"userdeit"
  }
 },
 
{
  path:'',
  pathMatch:'full',
  redirectTo:'userview',
},
      {
       path:'flatdetails',
       component:FlatdetailsComponent,
       data:{
        title:"flatinfo"
       }
      
      },
      // {
      //   path:'',
      //   pathMatch:'full',
      //   redirectTo:'flatinfo',
      // },
      {
        path:'flatinfo/:id',
        component:FlatinfoComponent,
        data:{
         title:"flatinfo"
        }
       
       },
       {
        path:'flatinfo',
        component:FlatinfoComponent,
        data:{
         title:"flatinfo"
        }
       
       },
       {
        path:'userview/:id',
        component:UserviewComponent,
        data:{
         title:"userinfo"
        }
       
       },   
      
       {
        path:'flatview/:id',
        component:FlatviewComponent,
        data:{
         title:"flatinfo"
        }
       
       },
       {
        path:'image',
        component:ImageComponent,
        data:{
         title:"paymentinfo"
        }
       
       },  

       {
        path:'paymode',
        component:PaymodeComponent,
        data:{
         title:"payment"
        }
       
       },  
        
      
       {
        path:'paylist/:id',
        component:PaylistComponent,
        data:{
         title:"paymentlist"
        }
       }, 
       {
        path:'paylist',
        component:PaylistComponent,
        data:{
         title:"paymentlist"
        }
       } ,
       
         {
           path:'payment',
           component:PaymentComponent,
           data:{
            title:""
          }
         } ,
        {
          path:'payment2021',
          component:Payment2021Component,
          data:{
           title:"paymentlist2021"
          }
         } ,
         {
          path:'paychild2021/:id',
          component:Paychild2021Component,
          data:{
           title:"paymentlist2021"
          }
         } ,
         {
          path:'invoice-list',
          component:InvoiceListComponent,
          data:{
           title:"invoice2022"
          }
         } ,
         {
          path:'invoicechild2022/:id',
          component:Invoicechild2022Component,
          data:{
           title:"invoice2022"
          }
         } ,
          {
          path:'viewinvoice/:id',
          component:ViewinvoiceComponent,
          data:{
           title:"viewinvoice"
          }
         } ,
         {
          path:'viewinvoice',
          component:ViewinvoiceComponent,
          data:{
           title:"viewinvoice"
          }
         } ,
         {
          path:'',
          pathMatch:'full',
          redirectTo:'viewinvoice/1',
        },
         {
          path:'viewreciept',
          component:ViewrecieptComponent,
          data:{
           title:"viewinvoice"
          }
         } ,
     ],
    
      }
  
  ]    
 



 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Appartment1RoutingModule { }
