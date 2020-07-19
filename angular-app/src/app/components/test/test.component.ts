import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-test',
  template: `
    <h2> {{errorMessage}} </h2> 
    <ul *ngFor = "let employee of employees"> 
      <li>{{employee.title + " -- " + employee.id}} </li>
      <button (click) = "onDelete(employee)"> X </button> 
    </ul>
    <form (submit) = "onSubmit($event)"> 
      <label> Employee name </label> 
      <input type = 'text' /> <br> 
      <input type = 'submit' value = 'Submit' />  
    </form> 
  `, 
  styles: []
})
export class TestComponent implements OnInit {
  employees: any[] = []
  errorMessage: string 
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => this.errorMessage = error 
    )
  }
}
