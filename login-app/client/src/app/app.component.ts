import { Component , OnInit} from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormArray } from '@angular/forms' 

import { forbiddenValidator } from './validators/forbiddenValidator'
import { passwordValidator } from './validators/passwordValidator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registrationForm: FormGroup
  formValid: boolean = true
  uniqeEmail: string 

  constructor(private _fb: FormBuilder){}

  ngOnInit(){ 
    fetch('http://localhost:5000/api/users/')
    .then(res => res.json())
    .then(data => console.log(data))
    this.registrationForm = this._fb.group({
      userName: ['' , [Validators.required , forbiddenValidator(/admin/)]],
      email: ['' , [Validators.required , forbiddenValidator(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ , true)]],
      password: ['', [Validators.required , forbiddenValidator(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ , true)]],
      confirmPassword: ['', [Validators.required] ]
    } , {validators: passwordValidator})
  }

  _rt(formName){
    return this.registrationForm.get(formName)
  }

  classes(inputName){
    let validation = this._rt(inputName)
    return {
      'is-invalid': validation.touched && validation.invalid || !this.formValid && !validation.touched,  
      'is-valid': validation.touched && validation.valid 
    }
  }

  emailClasses(){
    let email  = this.classes('email')
    return {
      'is-invalid': email['is-invalid'] || this._rt('email').value === this.uniqeEmail ,
      'is-valid': email['is-valid']
    }
  }

  confirmPasswordClass(){
    let confirmPassword  = this.classes('confirmPassword')
    return {
      'is-invalid': confirmPassword['is-invalid'] || this.registrationForm.errors?.notMatch ,
      'is-valid': confirmPassword['is-valid']
    }
  }

  error(inputName){
    return this.classes(inputName)["is-invalid"]
  }

  onSubmit(){
    this.formValid = this.registrationForm.status === "VALID" 
    if(this.formValid){
      let option = {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.registrationForm.value)
      }
      fetch('http://localhost:5000/api/users/register' , option)
      .then(res => res.json())
      .then(data => {
        this.uniqeEmail = data.email
      })
    }
  }
}
