import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service'
import { Router , ActivatedRoute , ParamMap} from '@angular/router'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  employees: any[] = []
  errorMessage: string = ''
  selected_id: string 
  constructor(private _employeeService: EmployeeService , private _router: Router , private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => this.errorMessage = error 
    )

    this._route.paramMap.subscribe((params: ParamMap) => this.selected_id = params.get('id') )
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

  getDetail(id):void {
    this._router.navigate(['/test-detail' , id])
  }

  isSelected(params){
    return params.id == this.selected_id
  }

}
