import { Component, OnInit } from '@angular/core';
import{payinfo2021} from'src/interfaces1/payinfo2021';
import { Payinfo2021Service } from '../services/payinfo2021.service';
@Component({
  selector: 'app-payment2021',
  templateUrl: './payment2021.component.html',
  styleUrls: ['./payment2021.component.scss'],
  providers:[Payinfo2021Service]
})
export class Payment2021Component implements OnInit {
  Pay:payinfo2021[]=[];
  constructor(private pays:Payinfo2021Service) { }

  ngOnInit(): void {
    this.getAlldetails();
    
  }
  getAlldetails(){
    this.pays.getAlldetails().subscribe(res=>{
      this.Pay=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as payinfo2021;
      }); 
    })
    
    
}
}
