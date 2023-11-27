import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'sidebar',component: SidebarComponent},
  { path:'login',component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
