import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MainhomeComponent } from './mainhome/mainhome.component';
import { FormDdComponent } from './form-dd/form-dd.component';
=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './home/interceptor/interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
>>>>>>> 1646057db4f6550d8a1157eebd29858425b370cb

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    FormDdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
