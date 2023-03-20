import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import{flat}from'src/interfaces1/flat'
import { FlatserviceService } from '../services/flatservice.service';
import { SharedserviceService } from '../services/sharedservice.service';
@Component({
  selector: 'app-flatinfo',
  templateUrl: './flatinfo.component.html',
  styleUrls: ['./flatinfo.component.scss'],
  providers:[FlatserviceService]
})
export class FlatinfoComponent implements OnInit,OnDestroy {
  Flat:flat[]=[];
  public editForm:FormGroup;
userRef:any;
  UsersObj:flat={
    id: '',
    name: '',
    block: '',
    flat:'',
   sqrft:'',
   status:''
  };
  id:string='';
  name:string='';
  block:string='';
  flat:string='';
  sqrft:string='';
  status:string='';
  subscribe: Subscription = new Subscription;
  selecteddata: any;
  
  constructor(public _flatservice:FlatserviceService, public formBuilder:FormBuilder, public router:Router,public act:ActivatedRoute,private service:SharedserviceService){ 
  
  this.editForm=this.formBuilder.group({  
    name:[''],
    block:[''],
    flat:[''],
    status:[''],
    sqrft:[''],
     })
  }

  ngOnInit(): void {
    this.getAlldetails();
    const id=this.act.snapshot.paramMap.get('id');
      this._flatservice.getflatDoc(id).subscribe((res: any)=>{
       this.userRef=res;
       this.editForm=this.formBuilder.group({
        name:[this.userRef.name],
         block:[this.userRef.block],
         flat:[this.userRef.flat],
         status:[this.userRef.status],
         sqrft:[this.userRef.sqrft],
       })
      })
      this.subscribe=this.service.flat.subscribe(data=>{
    this.selecteddata=data;
          console.log(data);
            
      // return  this.service.setFlat(data);
      })
   }
  
  changeFlat(flat:any){
 
    console.log(flat.target.value);
    this.service.setFlat(flat.target.value);
    // return  this.service.setFlat(flat);
   }
  getAlldetails(){
    this._flatservice.getAlldetails().subscribe(res=>{
      this.Flat=res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }as flat;
        })
      })
  }
  resetForm(){
    this.id='';
    this.name='';
   this.block='';
   this.block='';
   this.status='';
   this.sqrft='';
  
     }
   adduser(){
   if(this.name==''||this.block==''||this.flat==''||this.status==''||this.sqrft==''){
   alert('fill all input fields');
   return;
   }
   this.UsersObj.id='';
   this.UsersObj.name=this.name;
   this.UsersObj.block=this.block;
   this.UsersObj.flat=this.flat;
   this.UsersObj.status=this.status;
   this.UsersObj.sqrft=this.sqrft;
   this._flatservice.adduser(this.UsersObj);
   this.resetForm();
   this.router.navigate(['/appartment1/flatdetails']);
       }
       onSubmit(){
        const id=this.act.snapshot.paramMap.get('id');
        this._flatservice.update(this.editForm.value,id);
        this.router.navigate(['/appartment1/flatdetails']);
       }
       ngOnDestroy(){
        this.subscribe.unsubscribe(); 
     }
}
