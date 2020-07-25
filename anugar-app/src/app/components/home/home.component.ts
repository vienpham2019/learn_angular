import { Component, OnInit } from '@angular/core';
import { NewUserModel } from '../../model/new_user_model';
import { NewUserServer } from '../../server/new-user-server.service'
import { ActivatedRoute , Router , ParamMap} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: NewUserModel[]
  current_id: number
  constructor(private _server: NewUserServer , private _route: ActivatedRoute , private _router: Router ) { }

  ngOnInit(): void {
    this.users = this._server.getUsers()
    this._route.paramMap.subscribe((params: ParamMap) => this.current_id = parseInt(params.get('id')))
  }

  show_hidden_user(id):void {
    this.users = this._server.showUser(id)
  }

}
