import { Injectable } from '@angular/core';
import { CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private authenticationService:AuthenticationService,
              private router:Router
  ){};

  /**
   * Restricts access to admin/* views unless user is logged in.
  */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authenticationService.isLoggedIn()) return true; // checks jwt token
    this.router.navigateByUrl("/login");
    return false;
  }
  
}
