import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ViewinvoiceserviceService {

  constructor(public db:AngularFirestore) { }
  
      getAlldetails(){
    return this.db.collection('/invoicedetails').snapshotChanges();
      }
      
      getparticularinfo(id:any){
        return this.db.collection('/invoicedetails').doc(id).valueChanges();
      }
      getinvoice(id:any){
        return this.db.collection('/invoicedetails').doc(id).valueChanges();
      }
    

}
