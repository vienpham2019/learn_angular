import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from  '@angular/common/http'

import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

const httpObtions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  todoLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }
  // get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`)
  }

  // toggle Completed 
  toggleCompleted (todo:Todo):Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`
    return this.http.patch(url , todo , httpObtions)
  }
}
