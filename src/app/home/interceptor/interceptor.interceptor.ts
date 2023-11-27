import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UtilService } from 'src/app/core/util.service';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private utilityService: UtilService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }
    return next.handle(request).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.handleSessionTimeout();
          } else if (err.status) {
            // this.utilityService.errorToast(err.error?.message);
          }

          if (err.status === 0) {
            // this.utilityService.errorToast("Connection Failed");
          }
        }
      })
    );
  }

  private handleSessionTimeout() {
    // this.utilityService.errorToast('Session timed out. Please logout and login ');
  }
}