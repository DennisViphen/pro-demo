import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './home/sidebar/sidebar.component';

const routes: Routes = [
{
  path:'',loadChildren:() =>import('./home/home.module').then(m =>m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  