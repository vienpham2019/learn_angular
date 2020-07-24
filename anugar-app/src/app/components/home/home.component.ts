import { Component, OnInit } from '@angular/core';
import { NewUserModel } from '../../model/new_user_model';
import { NewUserServer } from '../../server/new-user-server.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: NewUserModel[]
  constructor(private _server: NewUserServer) { }

  ngOnInit(): void {
    this.users = this._server.getUsers()
  }

  show_hidden_user(id):void {
    this.users = this._server.showUser(id)
  }

}
