import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  state = 0;
  constructor(private http: Http) { 
    this.state = Math.random() * 10;
  }

  get(url: string, params?: any): Observable<Response> {
    let options: RequestOptionsArgs = {};

    // if (this.securityService) {
    //   options.headers = new Headers();
    //   options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
    // }

    return this.http.get(url, options).map(
      (res: Response) => {
        return res;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}
