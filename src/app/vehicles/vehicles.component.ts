import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicals:any=[]
  constructor(private _vehicalService:VehiclesService){
    _vehicalService.getVehicles().subscribe((data:any)=>{
      this.vehicals=data
      console.log(this.vehicals)
    },(err:any)=>{
      alert("Internal Server Error")
    })

  }
  term:string=''
  filterData(){
    this._vehicalService.filteredVehicales(this.term).subscribe((data:any)=>{
      this.vehicals=data
      console.log(this.vehicals)
    },(err:any)=>{
      alert("Internal Server Error")
    })
  }
  column:any=''
  order:any=""
  sort(){
    this._vehicalService.sortedVehicals(this.column,this.order).subscribe((data:any)=>{
      this.vehicals=data
      console.log(this.vehicals)
    },(err:any)=>{
      alert("Internal Server Error")
    })
  }
}
