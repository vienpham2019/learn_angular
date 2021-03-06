import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder , Validators, FormGroup , FormArray } from '@angular/forms'
import { forbiddenValidation } from './shared/forbiddenValidation'
import { passwordValidation } from './shared/passwordValidation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup
  index: number = 0 

  constructor (private _fb: FormBuilder ) { }

  get alternateEmail () {
    return this.registrationForm.get('alternateEmail') as FormArray
  }

  addAlternateEmail(){
    this.alternateEmail.push(this._fb.control('' , [Validators.required , forbiddenValidation(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]))
  }

  removeAlternateEmail(index){
    this.alternateEmail.removeAt(index)
  }

  ngOnInit(){
    this.registrationForm = this._fb.group({
      userName: ["" , [Validators.required , Validators.minLength(3)]], 
      email: ["" ],
      subscribe: [false], 
      phone: ["", [Validators.required, forbiddenValidation(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      password: ["" , [Validators.required]],
      confirmPassword: [""],
      address: this._fb.group({
        city: [""],
        state: [""],
        zipcode: [""]
      }), 
      alternateEmail: this._fb.array([])
    } , {validators: passwordValidation})

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        let email = this.registrationForm.get('email')
        if(checkedValue){
          email.setValidators([Validators.required, forbiddenValidation(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])
        }else{
          email.clearValidators()
        }
        email.updateValueAndValidity()
      })
  } 

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
