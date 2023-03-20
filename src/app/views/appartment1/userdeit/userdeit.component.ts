import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { demo } from 'src/interfaces1/demo';
import { SharedserviceService } from '../services/sharedservice.service';
import { DemoService } from '../services/demo.service';
@Component({
  selector: 'app-userdeit',
  templateUrl: './userdeit.component.html',
  styleUrls: ['./userdeit.component.scss'],
  providers:[DemoService]
})
export class UserdeitComponent implements OnInit {

  
  Demo:demo[]=[]; 
  
  constructor(public users:DemoService,  public router:Router,public act:ActivatedRoute,private service:SharedserviceService) { 
    
      }
      
     

  ngOnInit(): void {
   
    
  }
  
}
