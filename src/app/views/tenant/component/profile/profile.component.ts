import { Component, OnInit } from '@angular/core';
import { profile} from 'src/Tenantinterface/profile';
 import { ProfileserviceService } from 'src/Tenantservice/profileservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[ProfileserviceService]
  
})
export class ProfileComponent implements OnInit {
Profile:profile[]=[];
  constructor(private users:ProfileserviceService) { }
 
  ngOnInit(): void {
   this.getAlldetails();
  }
  
    getAlldetails(){
      this.users.getAlldetails().subscribe(res=>{
        this.Profile=res.map(e=>{
          return{
            id:e.payload.doc.id,
            ...e.payload.doc.data() as{}
          }as profile;
          })
        });
  }
}
