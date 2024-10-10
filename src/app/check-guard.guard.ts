import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckGuardGuard implements CanActivate
 
{
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const islogin=localStorage.getItem("islogin");
      if(islogin)
        return true;
      else
      {
        this.router.navigate(['/login']);
       // 
      return false;
      }
    }

}

