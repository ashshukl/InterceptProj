import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, finalize } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ApiinterceptService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();
    let ok: string;

    //Setting header values
    req = req.clone({setHeaders: {'Authorization': this.authService.getAuthToken()}});
    console.log(req.headers);

    //Calculating time elapsed between request and response
    return next.handle(req).pipe(
      tap({
              next: (event) => {ok = 'succeeded'}, 
              error: () => {ok = 'failed'}
      }),
      finalize(() =>{
              const elapsed = Date.now() - started;
              const msg = 'Request ' + ok + ' in ' + elapsed + 'ms.';
              console.log('Message>>',msg);
      }))
  }
}
