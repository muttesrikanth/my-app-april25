import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _htttpClient:HttpClient) { }

  login(data:any):Observable<any>{
  return   this._htttpClient.post('https://login-1-nkji.onrender.com/login',data)
  }
}
