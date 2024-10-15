import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && request.url.includes('/login')) {
          
          this.router.navigate(['/login'])
        }
       else if (error.status >= 400 && error.status < 500) {
          
          this.router.navigate(['/error'], { queryParams: { message: error.message } });
        } 
        else {
          
          this.router.navigate(['/error'], { queryParams: { message: 'Server error occurred' } });
        }
        return throwError(error);
      })
    );
  }
}
