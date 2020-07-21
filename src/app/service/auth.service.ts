import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, passworld : string){
    return new Promise (
         (resolve, reject)=>{
           firebase.auth().createUserWithEmailAndPassword(email,passworld).then(
             ()=>{
               resolve();
             },
             (error)=>{
               reject(error);
             }
           )
         }
    )
  }

  
  signInUser(email: string, passworld: string){
    return new Promise (
      (resolve,reject)=>{
        firebase.auth().signInWithEmailAndPassword(email, passworld).then(
          ()=>{
            resolve();
          },
          (error)=>{
            reject(error);
          }
        )
      }
    )
  }

  signOutUser(){
     firebase.auth().signOut();
  }

}
