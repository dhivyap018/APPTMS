import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private afs:AngularFirestore) { }
  getAlldetails(){
    return this.afs.collection('/payments').snapshotChanges();
      }
     
}
