import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as firebase from 'firebase/compat';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
 
  state: any;
 
  auth: any;
 
doc:any
  constructor(private afs:AngularFirestore,af:AngularFireStorage ) { }
//   storeEvent = (docid:any,userid:any) => {
//     const currentUsers = this.auth().currentUsers.userid;
//     const profile = this.afs.collection('/profile');
//     const document = this.profile.doc();
//     const documentId = document.id;
//     profile
//      .doc(documentId)
//      .set({
//        name: this.state.name,
//        block: this.state.block,
//        flat: this.state.flat,
//        status: this.state.status,
//        userid: currentUsers,
//        docid: documentId,
//       })
// }
// storeRestaurant = (userid:any, profile:any) => {
//   const userdetails = 
//    firebase
//    this.afs
//    .collection('/profile');
//   userdetails
//    .doc(userid)
//    .collection('/profile')
//    .doc(profile.place_id)
//    .set({
//       name: profile.name,
//       id: profile.place_id,
//     })
// }
}