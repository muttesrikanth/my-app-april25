import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _http:HttpClient) { }

  getVehicles():Observable<any>{
    return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }
  filteredVehicales(term:any):Observable<any>{
    return  this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
  }
  sortedVehicals(column:any,order:any):Observable<any>{
     return  this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+"&order="+order)
  }
  
}
