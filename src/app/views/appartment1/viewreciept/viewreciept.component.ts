import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ViewinvoiceserviceService } from '../services/viewinvoiceservice.service';
import{viewinvoice} from'src/interfaces1/viewinvoice';
@Component({
  selector: 'app-viewreciept',
  templateUrl: './viewreciept.component.html',
  styleUrls: ['./viewreciept.component.scss'],
  providers:[ViewinvoiceserviceService]
})
export class ViewrecieptComponent implements OnInit {
  invoicereciept:viewinvoice[]=[];
    
  constructor(private invoice:ViewinvoiceserviceService){}
    
  

  ngOnInit(): void {
   this.getAlldetails();
  }

  getAlldetails(){
    this.invoice.getAlldetails().subscribe(res=>{
      this.invoicereciept=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as viewinvoice;
      }); 
     
    })
    
    

}

}