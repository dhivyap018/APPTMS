import { Component, OnInit } from '@angular/core';
import{invoice2022} from'src/interfaces1/invoice2022';
import { InvoiceserviceService } from '../services/invoiceservice.service';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  providers:[InvoiceserviceService]
})
export class InvoiceListComponent implements OnInit {
  // houseNo=Number;
  // rentpaid:boolean=true;
  // rentamount=Number;
  // ownername=String;
  invoice1:invoice2022[]=[];
  page: number=1;
  totalLength:any;
  constructor(private invoice:InvoiceserviceService) { }

  ngOnInit(): void {
    this.getAlldetails();
  }
  getAlldetails(){
    this.invoice.getAlldetails().subscribe(res=>{
      this.invoice1=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as invoice2022;
      }); 
      this.totalLength=res.length;
    })
    
    
}
  // invoice=[
  //   {
  //     "houseNo":202,
  //     "rentpaid":true,
  //     "rentamount":20000,
  //     "ownername":"Divya"
  //   },
  //   {
  //     "houseNo":203,
  //     "rentpaid":false,
  //     "rentamount":30000,
  //     "ownername":"Malar"
  //   },
  //   {
  //     "houseNo":204,
  //     "rentpaid":true,
  //     "rentamount":40000,
  //     "ownername":"Rani"
  //   },
  //   {
  //     "houseNo":205,
  //     "rentpaid":true,
  //     "rentamount":50000,
  //     "ownername":"Janu"
  //   },
  //   {
  //     "houseNo":206,
  //     "rentpaid":false,
  //     "rentamount":60000,
  //     "ownername":"Nithya"
  //   },
  // ]
  // getDetails(i:number){
  // console.log(this.invoice[i]);
  // alert(this.invoice[i].ownername);
  // }
  // updatedetails(i:number){
  //   console.log(this.invoice[i]);
  // }
  
    }
  
  
  


