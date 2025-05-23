import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
