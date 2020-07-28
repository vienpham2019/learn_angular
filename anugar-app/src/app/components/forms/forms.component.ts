import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { NewUserServer } from '../../server/new-user-server.service'
import { NewUserModel } from '../../model/new_user_model'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  topics: string[] = ["React" , "Angular" , "Vu" , "Go"]
  @Input() user: NewUserModel = {id: 0, first_name: "", last_name: "", email: "", address: "", city: "", state: "", zipcode: "" , language: "" , show: false}

  @Output() updateUser = new EventEmitter()

  constructor(private _server: NewUserServer) { }

  ngOnInit(): void {
  }

  onSubmit(userForm): void{
    console.log(this.updateUser)
    if(!this.user.first_name){
      this._server.addNewUser(userForm.value)
    }else{
      this.updateUser.emit(userForm.value)
    }
    userForm.reset()
  }

  hasError(value){
    return value === "default"
  }

}
