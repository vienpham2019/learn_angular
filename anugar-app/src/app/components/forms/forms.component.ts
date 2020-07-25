import { Component, OnInit } from '@angular/core';
import { NewUserServer } from '../../server/new-user-server.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  topics: string[] = ["React" , "Angular" , "Vu" , "Go"]
  
  constructor(private _server: NewUserServer) { }

  ngOnInit(): void {
  }

  onSubmit(userForm): void{
    this._server.addNewUser(userForm.value)
    userForm.reset()
  }

}
