import { Component, OnInit } from '@angular/core';
import { NewUserModel } from '../../model/new_user_model'
import { NewUserServer } from '../../server/new-user-server.service'
import { ActivatedRoute , Router , ParamMap } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: NewUserModel
  current_id: number 
  edit: boolean = false 
  constructor(private _server: NewUserServer , private _route: ActivatedRoute , private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.current_id = parseInt(params.get('id'))
      this.user = this._server.getUser(this.current_id)
    })
  }

  goHome():void{
    this._router.navigate(['/home', {id: this.current_id}])
  }

  deleteUser():void{
    this._server.deleteUser(this.user.id)
    this._router.navigate(['home'])
  }

  goNext(){
    this.current_id = this._server.find_user_id(this.current_id + 1) ? this.current_id + 1 : 1
    this._router.navigate(['/user', this.current_id])
  }

  goPrev(){
    this.current_id = this._server.find_user_id(this.current_id - 1) ? this.current_id - 1 : this._server.getUsers().length 
    this._router.navigate(['/user', this.current_id])
  }

  updateUser(user){
    this.edit = !this.edit 
    console.log(user)
  }

}
