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
  getVehicle(id:any):Observable<any>{
    return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
  }
  filteredVehicales(term:any):Observable<any>{
    return  this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
  }
  sortedVehicals(column:any,order:any):Observable<any>{
     return  this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+"&order="+order)
  }
  paginateVehicals(limit:any,page:any):Observable<any>{
     return  this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page)
  }
  deleteVehical(id:number):Observable<any>{
     return  this._http.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
  }
  createVehicel(data:any){
    return this._http.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data)
  }
  editVehicel(id:any,data:any){
    return this._http.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data)
  }
  
}
