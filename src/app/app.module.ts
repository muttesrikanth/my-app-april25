import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeDataTaskComponent } from './employee-data-task/employee-data-task.component';
import { ShopingComponent } from './shoping/shoping.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { CustomLoginComponent } from './custom-login/custom-login.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewIdcardComponent } from './view-idcard/view-idcard.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentTaskComponent } from './parent-task/parent-task.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CapitalDirective } from './capital.directive';
import { InrPipe } from './inr.pipe';
import { TokenInterceptor } from './token.interceptor';
import { HooksComponent } from './hooks/hooks.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DetailsComponent,
    ErrorComponent,
    WelcomeComponent,
    CalculatorComponent,
    CircleComponent,
    BmiComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    EmployeeDataTaskComponent,
    ShopingComponent,
    VehiclesComponent,
    MailComponent,
    FlipkartComponent,
    WeatherComponent,
    GalleryComponent,
    CreateVehicleComponent,
    IdCardsComponent,
    AddIdCardComponent,
    AccountsComponent,
    CreateUserComponent,
    CreateUserTaskComponent,
    AddAccountComponent,
    CustomLoginComponent,
    VehicleDetailsComponent,
    ViewIdcardComponent,
    CommunicationComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    ParentTaskComponent,
    RatingComponent,
    TextAreaComponent,
    CapitalDirective,
    InrPipe,
    HooksComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
