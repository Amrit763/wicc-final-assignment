import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  finalize,
  Observable,
} from 'rxjs';

import { SpinnerService } from '../spineer/spinner.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(private spin$:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    this.spin$.showSpinner();
    // console.log('show spin')
    request=request.clone({
      setHeaders:{
        token:'Angular_Token_Ho_hai',
        language:'Eng'
      }
    })
    return next.handle(request).pipe(finalize(()=>{
      // console.log('hide spin')
      this.spin$.hideSpinner()
    }));
  }
}
