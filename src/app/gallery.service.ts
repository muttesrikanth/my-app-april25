import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _http:HttpClient) { }

  getGallery(){
    return this._http.get("https://picsum.photos/v2/list?page=1&limit=100")
  }
}
