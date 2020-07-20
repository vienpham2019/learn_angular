import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  employees: any[] = []
  errorMessage: string = ''
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => this.errorMessage = error 
    )
  }

  onSubmit (event){
    event.preventDefault()
    this._employeeService.addNewEmployee(event.target[0].value)
      .subscribe(
        data => this.employees.push(data),
        error => this.errorMessage = error
      )
    event.target.reset()
  }

  delete (employeeId) {
    this._employeeService.deleteEmployee(employeeId)
      .subscribe(
        data => this.employees = this.employees.filter(e => e.id !== employeeId),
        error => this.errorMessage = error 
      )
  }

}
