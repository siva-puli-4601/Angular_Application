import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenmangementInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const url=request.url;
    if(url==="http://172.17.10.128:8001/api/users1/login" || url==="http://172.17.10.128:8001/api/users1/register")
    {
      return next.handle(request);
    }
    return next.handle(request);
  }
}
