import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  constructor(private _vehicelService:VehiclesService,private _router:Router){}
  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),
  })
submit(){
  console.log(this.vehicleForm.value)
  this._vehicelService.createVehicel(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert('created with id:'+data.id)
      this._router.navigateByUrl('/dashboard/vehicles')
    },(e)=>{
      alert('internal server error')
    }
  )
}
}
