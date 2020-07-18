import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  errorMessage :string;
  constructor(private formsBuilder : FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
     this.initForm();
  }

  initForm(){
    this.signUpForm = this.formsBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit(){
    const email = this.signUpForm.get('email').value;
    const passworld = this.signUpForm.get('password').value;

    this.authService.createNewUser(email, passworld).then(
       ()=>{
         this.router.navigate(['/books'])
       }, 
       (err) =>{
         this.errorMessage = err;
       }
    )
  }

} 
