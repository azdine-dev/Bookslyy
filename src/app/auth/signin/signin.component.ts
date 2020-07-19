import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm : FormGroup;
  errorMessage :string;
  constructor(private formsBuilder : FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
     this.initForm();
  }

  initForm(){
    this.signInForm = this.formsBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit(){
    const email = this.signInForm.get('email').value;
    const passworld = this.signInForm.get('password').value;

    this.authService.signInUser(email, passworld).then(
       ()=>{
         this.router.navigate(['/books'])
       }, 
       (err) =>{
         this.errorMessage = err;
       }
    )
  }


}
