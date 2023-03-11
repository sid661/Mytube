import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class SidharthisactiveGuard implements CanActivate {
  // constructor(private login:LoginserviceService, private rr:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   if(this.login.isAuthenticated)
    //   {
       return true; }
    //   else
    //   {
    //     this.rr.navigateByUrl("login")
    //     return false;}
    // }
      
    // canActivateChild(
    //  childroute: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     if(this.login.isAuthenticated)
    //     {
    //       return true; }
    //     else
    //     {
    //       this.rr.navigateByUrl("login")
    //       return false;}
    //   };
  }
  

