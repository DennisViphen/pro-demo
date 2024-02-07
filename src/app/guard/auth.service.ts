import { Injectable } from '@angular/core';
import { UtilService } from '../core/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private utilservice:UtilService) { }

  isLoggedIn(){
    if(localStorage.getItem('token'))return true;
    return false
  }
}
