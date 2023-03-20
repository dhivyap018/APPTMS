import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private afs:AngularFirestore) { }
  getAlldetails(){
    return this.afs.collection('/profile').snapshotChanges();
      }
}
