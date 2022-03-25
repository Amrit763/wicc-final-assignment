import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('login gurad aayo')
      if(component.loginForm.invalid && component.loginForm.touched){
        let check= confirm('Are you sure you want to leave this page?');
        if(check){
          // console.log('leave garna khojyo')
          return true
        }else{
          return false
        }
      }

      return true;
  }
  
}
