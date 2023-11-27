import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginform =this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
     
      password:['',[ Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$')]],
    })
  
  }
  show(){
    let data = this.loginform.value
    console.log('data',data);
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched()
    }  
  }
  get userControl(){
    return this.loginform.controls
  }
}
