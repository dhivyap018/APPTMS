import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class Payinfo2021Service {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public db:AngularFirestore) { }
  getAlldetails(){
    return this.db.collection('/payinfo2021').snapshotChanges();
      }
      
      
      getparticularinfo(id:any){
        return this.db.collection('/payinfo2021').doc(id).valueChanges();
      }
      getpay2021(id:any){
        return this.db.collection('/payinfo2021').doc(id).valueChanges();
      }
}
