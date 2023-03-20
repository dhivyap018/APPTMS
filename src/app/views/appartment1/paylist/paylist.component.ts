import { Component, OnInit } from '@angular/core';
import { PaylistserviceService } from '../services/paylistservice.service';
import {  paylist} from 'src/interfaces1/paylist';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-paylist',
  templateUrl: './paylist.component.html',
  styleUrls: ['./paylist.component.scss'],
  providers:[PaylistserviceService]
})
export class PaylistComponent implements OnInit {
  Pay:paylist[]=[];
  items: any;
user: any;
columns: any;
public day=new Date();
  constructor(public db:AngularFirestore,public pays:PaylistserviceService,public actRouter:ActivatedRoute) {
    { 
      this.actRouter.params.subscribe(params=>{
        console.log(params)
        this.pays.getparticularinfo(params['id']).subscribe((i:any)=>{
          this.items=i});
        })
        
     }
    
   }
 
  
  ngOnInit(): void {
    getpay(identifierName)
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this.pays.getpay(this.pays.id).subscribe(val=>{(val)});
    };
      }
      startDate = new Date(2000, 0, 2);
    } 

    function getpay(id:any) {
      throw new Error('Function not implemented.');
    }
      

