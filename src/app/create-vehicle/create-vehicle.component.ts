import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  id:any=''
  constructor(private _vehicelService:VehiclesService,private _router:Router,private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe((data:any)=>{
      this.id=data.id
      _vehicelService.getVehicle(data.id).subscribe((data:any)=>{
        console.log(data)
        this.vehicleForm.patchValue(data)
      })
    },(e)=>{alert('unable to fetch data')})
  }
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
  // console.log(this.vehicleForm.value)
  if(this.id){
    this._vehicelService.editVehicel(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert('created with id:'+data.id)
        this._router.navigate(['/dashboard/vehicles'])
      },(e)=>{
        alert('unable to update')
      }
    )
  }
  else{
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
}
