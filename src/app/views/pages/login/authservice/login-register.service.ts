import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import{GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider, PhoneAuthProvider}from'@angular/fire/auth';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  state: any;
  windowRef: any;
phonenumber:any
  constructor(public auth:AngularFireAuth,private router:Router, private afs: AngularFirestore) { }

  // login(email:string,password:string){

  //   this
  //   .auth
  //   .signInWithEmailAndPassword(this.state.email, password)
  //   .then(res => {
  //   console.log('You in!');
  //   })
  //   .catch(err => {
  //   console.log('Something went wrong:',err.message);
  //   });
  //   }

    login(email:string,password:string){
     this.auth.signInWithEmailAndPassword(email,password).then( ()=>{
       localStorage.setItem('token','true');
        this.router.navigate(['/dashboard'])
      },err=>{
        alert("something went wrong");
       this.router.navigate(['/login'])
      })
   
      }
     register(email:string,password:string){
       this.auth.createUserWithEmailAndPassword(email,password).then( ()=>{
         alert('registration successfull');
         this.router.navigate(['/login'])
      },err=>{
         alert(err.message);
       this.router.navigate(['/register']);
      })
      }
       logout(){
         this.auth.signOut().then( ()=>{
           localStorage.removeItem('token');
            this.router.navigate(['/login'])
        })
      
         }
         forgotpassword(email:string){
this.auth.sendPasswordResetEmail(email).then(()=>{
  this.router.navigate(['/verifyemail']);
})
         }
googleSignIn(){
  return this.auth.signInWithPopup(new GoogleAuthProvider).then(res=>{
    this.router.navigate(['/dashboard']);
    localStorage.setItem('token',JSON.stringify(res.user?.uid));
  },err=>{
    alert(err.message);
  })
  }
 

}

       
    
