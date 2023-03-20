
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { FlatserviceService } from '../services/flatservice.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-flatview',
  templateUrl: './flatview.component.html',
  styleUrls: ['./flatview.component.scss'],
  providers:[FlatserviceService]
})
export class FlatviewComponent implements OnInit {
  items: any;
  constructor(public _flatService:FlatserviceService,public actRouter:ActivatedRoute)
   { 
    this.actRouter.params.subscribe(params=>{
      console.log(params)
      this._flatService.getparticularinfo(params['id']).subscribe((i:any)=>{
        this.items=i});
      })
   }
  
  ngOnInit(): void {
    getflat(identifierName)
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this._flatService.getflat(this._flatService.id).subscribe(val=>{(val)});
    };
      }
    }

function getflat(id:any) {
  throw new Error('Function not implemented.');
}
      

    


   

  



  


