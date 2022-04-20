import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakingbadService {
  private urlEndPoint:string='https://breakingbadapi.com/api/';
  constructor(private http:HttpClient) { }

  getQuote():Observable<any>{
    return this.http.get(this.urlEndPoint+"quote/random");
  }
  getCharacters():Observable<any>{
    return this.http.get(this.urlEndPoint+"characters");
  }
}
