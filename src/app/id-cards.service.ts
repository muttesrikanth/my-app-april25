import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCardsService {

  constructor( private _http:HttpClient) { }
  getIdCards():Observable<any>{
    return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')
  }
  getIdCard(id:any):Observable<any>{
    return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }
  searchIdCards(term:string):Observable<any>{
     return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term)
  }
  sortCards(col:any,order:any){
      return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+col+'&order='+order)
  }
  pageNation(limit:any,page:any){
 return this._http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+'&page='+page)
  }
  addIdCard(data:any){
    return this._http.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data)
  }
  editIdCard(id:any,data:any){
    return this._http.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data)
  }
  deleteCard(id:any){
      return this._http.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }
}
