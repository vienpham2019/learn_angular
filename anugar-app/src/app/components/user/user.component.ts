import { Component, OnInit } from '@angular/core';
import { NewUserModel } from '../../model/new_user_model'
import { NewUserServer } from '../../server/new-user-server.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: NewUserModel
  constructor(private _server: NewUserServer , private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let {id} = this._route.snapshot.params
    this.user = this._server.getUser(id)
  }

}
