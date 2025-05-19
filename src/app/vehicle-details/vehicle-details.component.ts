import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:any=[]
constructor(private _activeroute:ActivatedRoute,private _vehicaleservice:VehiclesService){
  _activeroute.params.subscribe((data:any)=>{
_vehicaleservice.getVehicle(data.id).subscribe((d:any)=>{
  this.vehicle=d
},(e)=>{
  alert('internal server error')
})

  },(e)=>{
    alert('internal server error')
  })
}
}
