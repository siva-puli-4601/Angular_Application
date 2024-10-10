import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements Resolve<any> {
  constructor(private ser:DataService){}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    //   console.log("siva",this.ser.resData())
    // return this.ser.resData();
    return {hello:"hai"};
  
  
}
}

export class CheckGuard implements CanActivate
 
{
  constructor(){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const islogin=localStorage.getItem("islogin");
      if(islogin)
        return true;
      else
      return false;
    }

}
