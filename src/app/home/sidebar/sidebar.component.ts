import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarVisible2: boolean = false;
  userform!:FormGroup

constructor(private fb:FormBuilder){
  this.userform =this.fb.group({
    projectname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
    taskName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
    selectedMember:['',[ Validators.required]],
    date:['',[ Validators.required]],
    enddate:['',[ Validators.required]],
  })


}
get userControl(){
  return this.userform.controls
}
  open(){
    this.sidebarVisible2= true
  }
  projects= [
    { name: 'project 1', value: '1' },
    { name: 'project 2', value: '2' },
    // Add more cities as needed
  ];

  members= [
    { name: 'person 1', value: '1' },
    { name: 'person 2', value: '2' },
    // Add more cities as needed
  ];

  show(){
    let data = this.userform.value
    console.log('data',data);
    if(this.userform.invalid){
      this.userform.markAllAsTouched()
    }  
  }
  cancel(){
    this.userform.reset();
    this.sidebarVisible2 = false;
    
  }

}
