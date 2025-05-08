import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
 
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"details",component:DetailsComponent},
  ]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
