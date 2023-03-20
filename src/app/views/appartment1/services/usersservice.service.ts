import { Injectable } from '@angular/core';
import{users}from'src/interfaces1/users';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  urldata: any;
  downloadURL: any;
 
  constructor(private afs:AngularFirestore,af:AngularFireStorage) { }
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  observable: any;
  
  getuserDoc(id:any){
    return this.afs.collection('/userdetails')
    .doc(id)
    .valueChanges()
  }
 getAlldetails(){
return this.afs.collection('/userdetails').snapshotChanges();
  }
  db=this.afs.collection('/userdetails');
  adduser(Users:users){
    Users.id=this.afs.createId();
    return this.afs.collection('/userdetails').doc(Users.id).set(Users);
  }
  deleteUsers(id:any){   
  //  return this.afs.doc('/flats/'+students.id).delete();
  return this.db.doc(id).delete();
  
}
update(Users:users,id:any){
 return this.db
 .doc(id)
 .update({
  name:Users.name,
  block:Users.block,
  email_id:Users.email_id,
  flat:Users.flat,
  id_proof:Users.id_proof,
  role:Users.role,
  mobile:Users.mobile,
  address:Users.address,

 });
  }
  getparticularinfo(id:any){
    return this.afs.collection('/userdetails').doc(id).valueChanges();
  }
  getUser(id:any){
    return this.afs.collection('/userdetails').doc(id).valueChanges();
  }
  
  
  }
  
  
  


