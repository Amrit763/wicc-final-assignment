import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import {
  Observable,
  tap,
} from 'rxjs';
import { SpinnerService } from 'src/app/shared/spineer/spinner.service';

import { ServiceService } from '../dashboard/service/service.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<boolean> {

  constructor (private dashboardServ:ServiceService, private spin$: SpinnerService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // console.log('here')
    // this.spin$.showSpinner();
    return this.dashboardServ.get().pipe(
      tap(res=>{
        // this.spin$.hideSpinner();
      })
    )
    // return of(true);
  }
}
