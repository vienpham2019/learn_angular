import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import {Todo} from '../../models/Todo'
import { Event } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; 
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // set Dinamic Classes
  setClasses = () => {
    let classes = {
      todo: this.todo.completed,
      isComplete: this.todo.completed
    }
    return classes
  }

  onToggle = (todo) => {
    // toggle in UI
    todo.completed = !todo.completed
    // toggle in service 
    this.todoService.toggleCompleted(todo)
  }

  onDelete = (todo:Todo) => {
    this.deleteTodo.emit(todo)
  }

}
