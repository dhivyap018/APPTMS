import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import{FlatserviceService} from'../services/flatservice.service';
import { flat} from 'src/interfaces1/flat';
import { SharedserviceService } from '../services/sharedservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-flatdetails',
  templateUrl: './flatdetails.component.html',
  styleUrls: ['./flatdetails.component.scss'],
  providers:[FlatserviceService]
})
export class FlatdetailsComponent implements OnInit,OnDestroy {
  
Flat:flat[]=[];
OrderHeader:string='';
  subscribe: Subscription = new Subscription;
  flat: any
  constructor(private _flatService:FlatserviceService,private service:SharedserviceService) {}
    

  ngOnInit(): void {
    this.getAlldetails();
    this.subscribe=this.service.flat.subscribe(data=>{
    // this.flat=data;
      
      console.log(data);
    //  return this.service.setFlat(data);
    })
  }
  changeFlat(flat:any){
 
     console.log(flat.target.value);
     this.service.setFlat(flat.target.value);
    //  return this.service.setFlat(flat);
    }
  getAlldetails(){
    this._flatService.getAlldetails().subscribe(res=>{
      this.Flat=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as flat;
        })
      })
    } 
    delete(Flat:flat){
      if(confirm("Are U sure want to delete"+Flat.name)){
        this._flatService.delete(Flat.id);
      }
    }
    key:string='name';
    reverse:boolean=false;
            sort(key: any) 
            {
             this.key=key;
             this.reverse=!this.reverse;
            }
            ngOnDestroy(){
               this.subscribe.unsubscribe(); 
            }
}
