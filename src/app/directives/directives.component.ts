import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  ages:number[]=[24,45,76,89,23,34,40]
  products:any[]=[
    {name:"pen",price:20,rating:2.6},
    {name:"book",price:200,rating:3.6},
    {name:"shirt",price:2000,rating:4.6},
    {name:"shoes",price:20000,rating:3.3},
    {name:"laptop",price:200000,rating:2.3},
  ]
}
