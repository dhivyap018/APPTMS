import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import{paylist} from'src/interfaces1/paylist';
@Injectable({
  providedIn: 'root'
})
export class PaylistserviceService {
 
  id(id: any) {
    throw new Error('Method not implemented.');
  }


  constructor(public db:AngularFirestore) {}
    
   getAlldetails(){
    return this.db.collection('/pay').snapshotChanges();
      }
      
      
      getparticularinfo(id:any){
        return this.db.collection('/pay').doc(id).valueChanges();
      }
      getpay(id:any){
        return this.db.collection('/pay').doc(id).valueChanges();
      }
      
          


  }


