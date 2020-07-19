import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-test',
  template: `
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
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data)
  }

  onSubmit(event){
    event.preventDefault()
    let [title] = event.target
    this._employeeService.addNewEmployee(title.value).subscribe(data => this.employees.push(data))
    event.target.reset()
  }

  onDelete(employee){
    this._employeeService.deleteEmployee(employee.id)
      .subscribe(data => this.employees = this.employees.filter(e => e.id !== employee.id))
  }

}
