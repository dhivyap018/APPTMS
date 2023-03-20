import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceserviceService } from '../services/invoiceservice.service';
import { Output } from '@angular/core';
@Component({
  selector: 'app-invoicechild2022',
  templateUrl: './invoicechild2022.component.html',
  styleUrls: ['./invoicechild2022.component.scss'],
  providers:[InvoiceserviceService]
})
export class Invoicechild2022Component implements OnInit {
  items: any;
status:boolean=true;
  constructor(public db:AngularFirestore,public invoice:InvoiceserviceService,public actRouter:ActivatedRoute,public router:Router) {
    {
      this.actRouter.params.subscribe(params=>{
        console.log(params)
        this.invoice.getparticularinfo(params['id']).subscribe((i:any)=>{
          this.items=i});
        })
  }
  }
 
  ngOnInit(): void {
    getinvoice2022(identifierName)
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this.invoice.getinvoice(this.invoice.id).subscribe((val: any)=>{(val)});
      this.router.navigate(['/appartment1/invoice/3'])
    };
      }
     print() {
      window.print();
     }
  }

 

    function getinvoice2022(id:any) {
      throw new Error('Function not implemented.');
    }
   


