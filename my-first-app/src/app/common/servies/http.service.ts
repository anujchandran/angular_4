import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseApiService {

  constructor(private http: Http) { }

  public get(url:string): Observable<any> {
  	return this.http.get(url)
        .map(resp => {
          return resp.json();
        })
        .catch(err =>  {
          return Observable.throw(err); // observable needs to be returned or exception raised
        });
  }
}
