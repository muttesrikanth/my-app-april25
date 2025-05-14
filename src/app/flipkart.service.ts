import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _http:HttpClient) { }
    getFlipkartProducts():Observable<any>{
    return this._http.get("https://fakestoreapi.com/products")
  }
}
