import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

    constructor( private _http:HttpClient) { }
    getAccounts():Observable<any>{
      return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
    }
    searchAccounts(term:string):Observable<any>{
       return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term)
    }
    sortAccounts(col:any,order:any){
        return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+col+'&order='+order)
    }
    pageNationAccounts(limit:any,page:any){
   return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+'&page='+page)
    }
    addAccount(data:any){
      return this._http.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',data)
    }
    deleteAccount(id:number){
        return this._http.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)
    }
}
