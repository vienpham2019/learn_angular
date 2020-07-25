import { Component, OnInit } from '@angular/core';
import { NewUserModel } from '../../model/new_user_model'
import { NewUserServer } from '../../server/new-user-server.service'
import { ActivatedRoute , Router} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: NewUserModel
  constructor(private _server: NewUserServer , private _route: ActivatedRoute , private _router: Router) { }

  ngOnInit(): void {
    let {id} = this._route.snapshot.params
    this.user = this._server.getUser(id)
  }

  deleteUser():void{
    this._server.deleteUser(this.user.id)
    this._router.navigate(['home'])
  }

}
