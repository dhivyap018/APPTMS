import { Component, OnDestroy, OnInit } from '@angular/core';
import { users } from 'src/interfaces1/users';
import{UsersserviceService} from '../services/usersservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedserviceService } from '../services/sharedservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  providers:[AdduserComponent]
})
export class AdduserComponent implements OnInit,OnDestroy {
// changeFlat($event: Event) {
// throw new Error('Method not implemented.');
// }
loggedIn:boolean=true;
loggout:boolean=false;
  Users:users[]=[]; 
public editForm:FormGroup;
userRef:any;
items:any;
Users1Obj:users={
  id: '',
  name: '',
  block: '',
  email_id:'',
  flat:'',
 id_proof:'',
 role:'',
 address:'',
 mobile:'',
 urldata:'',

};
id:string='';
  name:string='';
  block:string='';
  email_id:string='';
  flat:string='';
  id_proof:string='';
  role:string='';
  address:string='';
  mobile:string='';
  subscribe: Subscription = new Subscription;
  selecteddata: any;
  isShowResetBtn:boolean=false;
  constructor(public users:UsersserviceService, public formBuilder:FormBuilder, public router:Router,public act:ActivatedRoute,private service:SharedserviceService) {
  this.editForm=this.formBuilder.group({  
    name:[''],
    block:[''],
    email_id:[''],
     flat:[''],
     id_proof:[''],
     role:[''],
     address:[''],
     mobile:[''],
     urldata:[''],
     })

    }
    
     ngOnInit(): void {
      this.getAlldetails();
        const id=this.act.snapshot.paramMap.get('id');
        this.isShowResetBtn = id === null ? true : false;
        this.users.getuserDoc(id).subscribe((res: any)=>{
         this.userRef=res;
         this.editForm=this.formBuilder.group({
           name:[this.userRef.name],
           block:[this.userRef.block],
           email_id:[this.userRef.email_id],
           flat:[this.userRef.flat],
           id_proof:[this.userRef.id_proof],
           role:[this.userRef.role],
           address:[this.userRef.address],
           mobile:[this.userRef.mobile]
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
//  return  this.service.setFlat(flat);
// return (event.target as HTMLInputElement).value;
}
    getAlldetails(){
      this.users.getAlldetails().subscribe(res=>{
        this.Users=res.map(e=>{
          return{
            id:e.payload.doc.id,
            ...e.payload.doc.data() as{}
          }as users;
          })
        })
      }
      resetForm(){
        this.id='';
        this.name='';
       this.block='';
       this.email_id='';
       this.flat='';
       this.id_proof='';
       this.role='';
       this.address='';
       this.mobile='';
         }
         adduser(){
          if(this.name==''||this.block==''||this.email_id==''||this.flat==''||this.id_proof==''||this.role==''||this.address==''||this.mobile==''){
          alert('fill all input fields');
          return;
          }
          this.Users1Obj.id='';
   this.Users1Obj.name=this.name;
   this.Users1Obj.block=this.block;
   this.Users1Obj.email_id=this.email_id;
   this.Users1Obj.flat=this.flat;
   this.Users1Obj.id_proof=this.id_proof;
   this.Users1Obj.role=this.role;
   this.Users1Obj.address=this.address;
   this.Users1Obj.mobile=this.mobile;
   this.users.adduser(this.Users1Obj);
   this.resetForm();
   this.router.navigate(['/appartment1/user-details']);
       }
     
       onSubmit()
        {
          const id=this.act.snapshot.paramMap.get('id');
          this.users.update(this.editForm.value,id);
          this.router.navigate(['/appartment1/user-details']);
        };
        ngOnDestroy(){
          this.subscribe.unsubscribe();
        }
       }
          
        
       
       
  






