import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html', 
  styles: []
})
export class TestComponent implements OnInit {
  employees: number[] = [1,2,3]
  errorMessage: string = ""
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this._employeeService.getEmployees().subscribe(
    //   data => this.employees = data,
    //   error => this.errorMessage = error 
    // )
  }
}
