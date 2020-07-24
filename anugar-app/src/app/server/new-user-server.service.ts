import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { NewUserModel } from '../model/new_user_model'

@Injectable({
  providedIn: 'root'
})
export class NewUserServer{
  users: NewUserModel[] = [
    {id: 1 , first_name: "vien" , last_name: "pham" , email: "vienpham@gmail.com" , address: "1223 briai" , city: "conroe" , state: "Tx", zipcode: "77301", language: "React" , show: true},
    {id: 2 , first_name: "vien2" , last_name: "pham" , email: "vienpham2@gmail.com" , address: "1223 briai" , city: "conroe" , state: "Tx", zipcode: "77301", language: "React" , show: false}
  ]
  constructor() { }

  getUsers(){
    return this.users
  }

  getUser(id){ 
    return this.users.find(u => u.id == id)
  }

  showUser(id) {
    let user = this.users.find(u => u.id === id)
    console.log('hit')
    user.show = !user.show 
    return this.users
  }
}
