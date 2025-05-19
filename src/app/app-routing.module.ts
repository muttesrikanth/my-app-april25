import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataTaskComponent } from './employee-data-task/employee-data-task.component';
import { ShopingComponent } from './shoping/shoping.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdCardsComponent } from './id-cards/id-cards.component';
import { AddIdCardComponent } from './add-id-card/add-id-card.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserTaskComponent } from './create-user-task/create-user-task.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AuthenticationGuard } from './authentication.guard';
import { CustomLoginComponent } from './custom-login/custom-login.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewIdcardComponent } from './view-idcard/view-idcard.component';

const routes: Routes = [
  {path:"shoping",component:ShopingComponent},
  {path:"",component:LoginComponent},
  
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:"",component:HomeComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"circle",component:CircleComponent},
    {path:"bmi",component:BmiComponent},
    {path:"vehicles",component:VehiclesComponent},
    {path:"employee",component:EmployeeDataTaskComponent},
    {path:"mail",component:MailComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"weather",component:WeatherComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"createVehicle",component:CreateVehicleComponent},
    {path:'idcards',component:IdCardsComponent},
    {path:'addidcards',component:AddIdCardComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'createuser',component:CreateUserComponent},
    {path:'createusertask',component:CreateUserTaskComponent},
    {path:'addaccount',component:AddAccountComponent},
    {path:'customlogin',component:CustomLoginComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'view-idcard/:id',component:ViewIdcardComponent},
  ]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
