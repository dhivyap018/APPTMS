import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  
  public editDataDetails: any = [];
  public subject = new Subject<any>();
public flat=new BehaviorSubject(this.editDataDetails);
  constructor() { }
  setFlat(flat:any){
    this.flat.next(flat);
  }
}
