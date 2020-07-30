import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Vien Pham'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zipcode: new FormControl('')
  //   })
  // })

  constructor (private _fb: FormBuilder ) { }

  registrationForm = this._fb.group({
    userName: ["Vien Pham"], 
    password: [""],
    confirmationPassword: [""],
    address: this._fb.group({
      city: [""],
      state: [""],
      zipcode: [""]
    })
  })

  loadApiData(){
    this.registrationForm.setValue({
      userName: ['Bruce'],
      password: ['test'],
      confirmPassword: ['test'],
      address: {
        city: ['City'],
        state: ['State'],
        zipcode: ['123456']
      }
    })
  }

}
