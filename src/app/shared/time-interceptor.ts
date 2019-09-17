import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const start = new Date();
    return next.handle(request).pipe(
      finalize(() => {
        const end = new Date();
        const time = end.getTime() - start.getTime();
        console.log(`${request.method} ${request.url} : ${time}ms`);
      })
    );
  }
}
