import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  jsonToQueryString(json: any) {
    if(json) {
      return '?' + 
      Object.keys(json).map(function(key) {
          return encodeURIComponent(key) + '=' +
              encodeURIComponent(json[key]);
      }).join('&');
    } else {
      return ''
    }
    
  }
  decodeToken() : any | null {
    let token = localStorage.getItem('token');
    token = token ?? '';
    let decodedToken:any | null = null
    try {
      decodedToken = jwtDecode<any>(token);
    } catch (error) {
      decodedToken = null
    }
    return decodedToken;
  }
}
