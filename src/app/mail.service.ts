import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http:HttpClient) {}

  getMails():Observable<any>{
 return this._http.get("https://jsonplaceholder.typicode.com/todos")
  }

}
