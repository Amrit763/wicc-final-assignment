import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // alert('user guard called');
      
      if(!this.authService.checkToken()){
        // console.log('alert called')
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
  }

}
