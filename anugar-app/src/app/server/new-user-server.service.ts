import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { NewUserModel } from '../model/new_user_model'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewUserServer{
  users: NewUserModel[] = [
    {id: 1 , first_name: "vien" , last_name: "pham" , email: "vienpham@gmail.com" , address: "1223 briai" , city: "conroe" , state: "Tx", zipcode: "77301", language: "React" , show: false},
    {id: 2 , first_name: "vien2" , last_name: "pham" , email: "vienpham2@gmail.com" , address: "1223 briai" , city: "conroe" , state: "Tx", zipcode: "77301", language: "React" , show: false}
  ]

  _url: string = ""
  constructor(private _http: HttpClient) { }

  getUsers(){
    return this.users
  }

  getUser(id){ 
    return this.users.find(u => u.id == id)
  }

  showUser(id) {
    let user = this.users.find(u => u.id === id)
    user.show = !user.show 
    return this.users
  }

  addNewUser(user):Observable<any>{
    let {first_name , last_name , email , language} = user
    let {address , city , state , zipcode} = user.address_group
    let new_user = {
      id: this.users.length + 1, first_name , last_name , email , address, city , state , zipcode , language , show: false
    }
    this.users.push(new_user)
    return this._http.post<any>(this._url , new_user)
  }

  updateUser(user){
    this.users[this.users.findIndex(u => u.id === user.id)] = user
  }

  deleteUser(id):void{
    this.users = this.users.filter(u => u.id !== id)
  }

  find_user_id (id) {
    return this.users.find(u => u.id === id)
  }
}
