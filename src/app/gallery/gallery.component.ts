import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryData:any=[]
  constructor(private _galleryService:GalleryService){
    _galleryService.getGallery().subscribe((data:any)=>{
      this.galleryData=data;
    },(err)=>{
      alert("Internal server error")
    })
  }
}
