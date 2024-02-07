import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { UtilService } from '../core/util.service';
// import { UtilityService } from '../core/utils/utility.service';
// import { Roles } from '../core/variables/enum';
// import { AES,enc } from 'crypto-js';
// import { environment } from 'src/environments/environment';


export const authGuard : CanActivateFn = (route, state) =>  {
    return true;

}
export const AuthencticationGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
    if (authService.isLoggedIn()) {
      console.log('token eruku');
      
      return true;
    }
    console.log('token ell');
    
    return router.parseUrl('/login');
  };

  export const AdminGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const utilService = inject(UtilService);
    const userDetails = utilService.decodeToken();
       console.log('userDetails',userDetails);
       
    if (authService.isLoggedIn()) {
      if (userDetails?.['roleId'] == 1 ) {
        return true;
      } else {
         router.navigate(['/main']);
         return false
      }
    } else {
      return false;
    }
  };
  export const userGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const utilService = inject(UtilService);
    const userDetails = utilService.decodeToken();
       console.log('userDetails',userDetails);
       
    if (authService.isLoggedIn()) {
      if (userDetails?.['roleId'] == 2 ) {
        return true;
      } else {
         router.navigate(['/main']);
         return false
      }
    } else {
      return false;
    }
  };