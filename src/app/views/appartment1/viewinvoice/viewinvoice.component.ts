import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { invoice2022 } from 'src/interfaces1/invoice2022';
import { paylist } from 'src/interfaces1/paylist';
import { InvoiceserviceService } from '../services/invoiceservice.service';
import { PaylistserviceService } from '../services/paylistservice.service';
@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.scss'],
  providers:[InvoiceserviceService]
})
export class ViewinvoiceComponent implements OnInit {
  items: any;
  
  constructor(public db:AngularFirestore,public invoices:InvoiceserviceService,public actRouter:ActivatedRoute,private router:Router){
    this.actRouter.params.subscribe(params=>{
      console.log(params)
      this.invoices.getparticularinfo(params['id']).subscribe((i:any)=>{
        this.items=i});
      })
  } 

  ngOnInit(): void 
  {
    
    getinvoice(identifierName)
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this.invoices.getinvoice(this.invoices.id).subscribe((val: any)=>{(val)});
      
    };
      }
      
  }
  




function getinvoice(identifierName: (compileIdentifier: import("@angular/compiler").CompileIdentifierMetadata | null | undefined) => string | null) {
  throw new Error('Function not implemented.');
}

