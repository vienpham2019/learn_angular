import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: any[] = [
    {name: 'Vien', age: '22', id: '1'},
    {name: 'Viet', age: '19', id: '2'},
    {name: 'Duy', age: '23', id: '3'},
    {name: 'Man', age: '30', id: '4'}
  ]
  constructor() { }

  getEmployees () {
    return this.employees
  }

  addNewEmployee(name , age) {
    this.employees.push({name,age,id: this.employees.length + 1})
    return this.employees
  }
}
