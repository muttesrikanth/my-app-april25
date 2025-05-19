import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomLoginService {

  constructor(private _htttp:HttpClient) { }

  signUp(data:any):Observable<any>{
   return this._htttp.post("https://backend-api-kwl0.onrender.com/users",data)
  }
  login(data:any):Observable<any>{
return this._htttp.post("https://backend-api-kwl0.onrender.com/users/login",data)
  }
}
