import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Ack } from './models/ack';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DemowsclientService {  

  name:string;

  constructor(private httpClient:HttpClient) {    
  }  

  getAck(name):Observable<any>{
    const apiUrl = 'http://localhost:8085/eac/api/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    //return this.httpClient.get(apiUrl+name).pipe(map(this.extractData));
    return this.httpClient.get(apiUrl+name).pipe(map(this.extractData));
  }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }

}
