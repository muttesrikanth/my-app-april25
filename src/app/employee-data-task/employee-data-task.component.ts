import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-data-task',
  templateUrl: './employee-data-task.component.html',
  styleUrls: ['./employee-data-task.component.css']
})
export class EmployeeDataTaskComponent {
  employees: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];

  delete(i:number){
    this.employees.splice(i,1)
  }
  sortHeigh(){
    this.employees.sort((a:any,b:any)=>b.experience-a.experience)
  }
  sortHeighpack(){
    this.employees.sort((a:any,b:any)=>b.package-a.package)
  }
  role:any='all'
  emp=this.employees
  rolefilter(){
    if (!(this.role=='all')){

      this.emp=this.employees.filter((e:any)=>e.role==this.role)
    }
    else{
      this.emp=this.employees
    }
  }
  term:string=""
  search(){
    this.emp=this.employees.filter((e:any)=>e.name.includes(this.term))
  }
  bonous(){
    this.emp=this.employees.map((val:any)=>{
      val.package=val.package+30000
      return val
    })
  }
  ctc(){
    var ctcvalue=this.employees.reduce((acc:any,val:any)=> acc+val.package,0)
    alert("Cost to company:"+ctcvalue)
  }
  name:string=''
  experence=""
  package=""
  rolee:string=""
  add(){
    this.employees.unshift({name:this.name, experience: this.experence, package: this.package, role:this.rolee})
  }
}
