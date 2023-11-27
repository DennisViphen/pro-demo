import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiList } from 'src/app/api-list';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!:FormGroup;
  constructor(private fb:FormBuilder,private apiservice:ApiService,
    private route:Router){
    this.loginform =this.fb.group({
<<<<<<< HEAD
      Email: ['', [Validators.required, Validators.email]],
     
      password:['',[ Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$')]],
=======
      email:['',[ Validators.required]],
      password:['',[ Validators.required]],
>>>>>>> 1646057db4f6550d8a1157eebd29858425b370cb
    })
  
  }
  login(){
    let data = this.loginform.value
    console.log('data',data);
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched()
    }  
  this.apiservice.Post(ApiList.login,data).subscribe({
    next:(res:any) => {
      console.log('Responseee',res);
      localStorage.setItem('token',res.token)
      this.route.navigate(['/sidebar'])
    },
    error:(error:any) => {
      console.log(error);
      
    }
  })
    
  }
  get userControl(){
    return this.loginform.controls
  }
}
