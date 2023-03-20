import { Component, OnInit } from '@angular/core';
import { Payinfo2021Service } from '../services/payinfo2021.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { payinfo2021 } from 'src/interfaces1/payinfo2021';
@Component({
  selector: 'app-paychild2021',
  templateUrl: './paychild2021.component.html',
  styleUrls: ['./paychild2021.component.scss'],
  providers:[Payinfo2021Service]
})
export class Paychild2021Component implements OnInit {
  Pay2021:payinfo2021[]=[];
  items: any;

  constructor(public db:AngularFirestore,public pays1:Payinfo2021Service,public actRouter:ActivatedRoute) {
    {
      this.actRouter.params.subscribe(params=>{
        console.log(params)
        this.pays1.getparticularinfo(params['id']).subscribe((i:any)=>{
          this.items=i});
        })
  }
}

  ngOnInit(): void {
    getpay2021(identifierName)
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this.pays1.getpay2021(this.pays1.id).subscribe((val: any)=>{(val)});
    };
      }
      
  }

 

    function getpay2021(id:any) {
      throw new Error('Function not implemented.');
    }
      