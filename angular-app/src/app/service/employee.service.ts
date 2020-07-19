import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from '../module/employee'
import { Observable , throwError} from 'rxjs'
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "https://jsonplaceholder.typicode.com/todos1"
  private _limit : string = "?_limit=10"

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable <IEmployee[]> {
    return this._http.get<IEmployee[]>(this._url + this._limit).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }

  addNewEmployee(title): Observable <IEmployee> {
    let new_employee = {title, completed: false, id: Math.floor(Math.random() * Math.floor(100))}
    return this._http.post<IEmployee>(this._url , new_employee , httpOptions)
  }

  deleteEmployee(employeeId): Observable <IEmployee> {
    return this._http.delete<IEmployee>(this._url + "/" + employeeId , httpOptions)
  }
}
