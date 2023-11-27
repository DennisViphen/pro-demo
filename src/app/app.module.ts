import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { FormDdComponent } from './form-dd/form-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    FormDdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
