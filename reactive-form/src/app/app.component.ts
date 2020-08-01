import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder , Validators } from '@angular/forms'
import { forbiddenValidation } from './shared/forbiddenValidation'
import { passwordValidation } from './shared/passwordValidation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private _fb: FormBuilder ) { }

  registrationForm = this._fb.group({
    userName: ["" , [Validators.required , Validators.minLength(3)]], 
    email: ["", [Validators.required, forbiddenValidation(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    phone: ["", [Validators.required, forbiddenValidation(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
    password: ["" , [Validators.required , Validators.minLength(5)]],
    confirmPassword: [""],
    address: this._fb.group({
      city: [""],
      state: [""],
      zipcode: [""]
    })
  } , {validators: passwordValidation})

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Bruce', 
      email: ["email@gmail.com"],
      phone: ["123-212-1223"], 
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State', 
        zipcode: '1234567'
      }
    })
  }

  formValidation(inputName) {
    return this.registrationForm.get(inputName)
  }

  classes(inputName){
    let validation = this.formValidation(inputName)
    return {
      'is-invalid': validation.invalid && validation.touched,
      'is-valid': validation.valid && validation.touched
    }
  }

}
