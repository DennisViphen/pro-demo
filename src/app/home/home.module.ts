import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,ButtonModule,
    DropdownModule,ReactiveFormsModule,
    InputTextModule,
    CalendarModule
  ]
})
export class HomeModule { }
