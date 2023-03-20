import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { reduce } from 'rxjs';
import { paylist } from 'src/interfaces1/paylist';
import { pay } from 'src/interfaces1/paymode';
import { PaylistserviceService} from '../services/paylistservice.service';

@Component({
  selector: 'app-paymode',
  templateUrl: './paymode.component.html',
  styleUrls: ['./paymode.component.scss'],
  providers:[PaylistserviceService]
})
export class PaymodeComponent implements OnInit {
total='';
selectType='null';
Pay:paylist[]=[];

OrderHeader:string='';

  constructor(private pays:PaylistserviceService) { }
  
  ngOnInit(): void {
    this.getAlldetails();
    
   
  }
  
  getAlldetails(){
    this.pays.getAlldetails().subscribe(res=>{
      this.Pay=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as paylist;
      }); 
    })
    
    
}

}




