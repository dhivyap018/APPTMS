import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UsersserviceService } from '../services/usersservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { users } from 'src/interfaces1/users';
import{Storage,ref,uploadBytesResumable,getDownloadURL}from '@angular/fire/storage'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subscription } from 'rxjs';
import{SharedserviceService} from '../services/sharedservice.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
  providers:[UsersserviceService]
})
export class UserviewComponent implements OnInit {
  items: any;
  public file:any={}
   @Input()collection: any;
  @Input()page: number = 1;
  Users:users[]=[];
  childData: any;
  totalLength:any;
  id:any
  downloadURL: any;
  uploadTask: any;
  db: any;
  searchText:any;
  // OrderHeader: string='';

  flat: any;
  constructor(public users:UsersserviceService,public actRouter:ActivatedRoute,public router:Router,public storage:Storage,public afs:AngularFirestore,public af:AngularFireStorage) 
  {
  
    this.actRouter.params.subscribe(params=>{
      console.log(params)
      this.users.getparticularinfo(params['id']).subscribe((i:any)=>{
        this.items=i});
      })
     
   }
   
  ngOnInit(): void {
   getUser(identifierName)
    {
    const value=this.actRouter.snapshot.paramMap.get('id');
    this.users.getUser(this.users.id).subscribe(val=>{(val)});
    };
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
                  
      
    }

function getUser(id:any) {
  throw new Error('Function not implemented.');
}
  


 