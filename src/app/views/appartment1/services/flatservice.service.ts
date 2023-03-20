import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import{flat}from'src/interfaces1/flat'
@Injectable({
  providedIn: 'root'
})
export class FlatserviceService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private afs:AngularFirestore) { }
   
  getflatDoc(id:any){
    return this.afs.collection('/flatdetails')
    .doc(id)
    .valueChanges()
  }
 getAlldetails(){
return this.afs.collection('/flatdetails').snapshotChanges();
  }
  db=this.afs.collection('/flatdetails');
  adduser(Flat:flat){
    Flat.id=this.afs.createId();
    return this.afs.collection('/flatdetails').doc(Flat.id).set(Flat);
  }
  delete(id:any){   
  //  return this.afs.doc('/flats/'+students.id).delete();
  return this.db.doc(id).delete();
  
}
update(Flat:flat,id:any){
 return this.db
 .doc(id)
 .update({
  name:Flat.name,
  block:Flat.block,
  status:Flat.status,
  flat:Flat.flat,
  sqrft:Flat.sqrft,
 
 });
  }
  getparticularinfo(id:any){
    return this.afs.collection('/flatdetails').doc(id).valueChanges();
  }
  getflat(id:any){
    return this.afs.collection('/flatdetails').doc(id).valueChanges();
  }
  
  }




