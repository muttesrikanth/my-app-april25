import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './upi/upi.component';
import { CodComponent } from './cod/cod.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'upi',component:UpiComponent},
  {path:'cod',component:CodComponent},
  {path:'card',component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
