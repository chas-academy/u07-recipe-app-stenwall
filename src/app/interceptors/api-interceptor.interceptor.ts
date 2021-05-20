import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()

// THIS COMPONENT IS NOT USED!
// I just kept it for reference

export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      // get the request url
      let requestUrl = request.url;
      // replace the string prefix with the correct url
      if (requestUrl.indexOf('@api-eda') !== -1) {
        requestUrl = requestUrl.replace('@api-eda', environment.EDA_API_URL);
      }
       // clone the http request
      const correctRequest = request.clone({
        url: requestUrl
      });
      // return clone
      return next.handle(correctRequest);
  }
}

// sources for this solution when using multiple API:s:
// -----------------------------------------------------------------------
// https://dev.to/leonardovff/angular-consuming-multiple-apis-with-angular-httpclient-in-a-beautiful-way-using-interceptors-3im1
// -----------------------------------------------------------------------
// https://angular.io/guide/http#intercepting-requests-and-responses