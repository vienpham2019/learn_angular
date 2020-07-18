import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-test',
  template: `
    <ul *ngFor = "let employee of employees"> 
      <li>{{employee.name + " -- " + employee.age + " -- " + employee.id}} </li>
    </ul>
    <form (submit) = "onSubmit($event)"> 
      <label> Employee name </label> 
      <input type = 'text' /> <br> 
      <label> Employee age </label> 
      <input type = 'text' /> <br> 
      <input type = 'submit' value = 'Submit' />  
    </form> 
  `, 
  styles: []
})
export class TestComponent implements OnInit {
  employees: any[] 
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees()
  }

  onSubmit(event){
    event.preventDefault()
    let [name , age] = event.target
    this.employees = this._employeeService.addNewEmployee(name.value , age.value)
    event.target.reset()
  }

}
