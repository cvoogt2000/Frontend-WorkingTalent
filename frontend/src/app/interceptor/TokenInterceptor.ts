import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isPlatformBrowser(this.platformId)) {
      const authToken = localStorage.getItem("WT_TOKEN");

      if (!!authToken) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + authToken
          }
        });
      }

      return next.handle(request);
    }

    return next.handle(request);
  }
}
