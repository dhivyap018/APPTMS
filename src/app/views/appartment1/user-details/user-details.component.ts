import { Component, OnDestroy, OnInit } from '@angular/core';
import { users} from 'src/interfaces1/users';
import { UsersserviceService } from '../services/usersservice.service';
import{Storage,ref,uploadBytesResumable,getDownloadURL}from '@angular/fire/storage'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { user } from '@angular/fire/auth';
import { SearchfilterPipe } from '../pipes/searchfilter.pipe';
import { Subscription } from 'rxjs';
import{SharedserviceService} from '../services/sharedservice.service';
import { flat } from 'src/interfaces1/flat';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers:[UsersserviceService,SearchfilterPipe]
})
export class UserDetailsComponent implements OnInit,OnDestroy {
  public file:any={}
  Users:users[]=[];
  // Flat:flat[]=[];
  subscribe: Subscription = new Subscription;
  urldata: any;
  
  id:any
  downloadURL: any;
  uploadTask: any;
  db: any;
  searchText:any;
  // OrderHeader: string='';
page:any;
collection :string='';
  flat: any;

  constructor(private users:UsersserviceService,public storage:Storage,public afs:AngularFirestore,public af:AngularFireStorage,private service:SharedserviceService) {
  } 

  ngOnInit(): void {
  this.getAlldetails();
  this.subscribe=this.service.flat.subscribe(data=>{
    // this.flat=data;
       console.log(data);
      // return this.service.setFlat(data);
  })
  }
  changeFlat(flat:any){
 
   console.log(flat.target.value);
     this.service.setFlat(flat.target.value);
    //  return this.service.setFlat(flat);
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
deleteUsers(Users:users){
  if(confirm("Are You want to delete"+Users.name))
  {
   this.users.deleteUsers(Users.id)
   
  } 
 }

 upload(event:any){
  this.file=event.target.files[0];
  console.log("uploading..",this.file.name)
}
// deleteImage(user:users){
//   if(confirm("Are u want to delete"+user.urldata)){
//   return this.db.doc(user.id).delete(this.downloadURL)
//   }
//  }
 deleteImage(user:users){
  const storageRef=ref(this.storage,`folder_name/${this.file.name}`) 
  const uploadTask=uploadBytesResumable(storageRef,this.file);
  uploadTask.on('state_changed',
  (snapshot)=>{
    const progress=(snapshot.totalBytes)
    console.log('upload is'+progress+'%done')
    
  },
  (error)=>{
    console.log(error.message);
  },
   ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{ 
      this.afs.collection("/userdetails").doc(user.id).update({
        urldata:downloadURL
      })
      if(confirm("Are u want to delete"+user.urldata)){
      this.db.doc(user.id).delete(user.urldata)
      console.log('File available at',downloadURL)
      }
   })  
       })

       }
       update(user:users){
        const storageRef=ref(this.storage,`folder_name/${this.file.name}`) 
        const uploadTask=uploadBytesResumable(storageRef,this.file);
        uploadTask.on('state_changed',
        (snapshot)=>{
          const progress=(snapshot.totalBytes)
          console.log('upload is'+progress+'%done')
          
        },
        (error)=>{
          console.log(error.message);
        },
         ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{ 
            if(confirm("Are u want to update" + user.name)){
            this.afs.collection("/userdetails").doc(user.id).update({
              urldata:downloadURL
            
            })
          }
            })
          
            })
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
           
         
      
        
       
    
    
  
  

 
