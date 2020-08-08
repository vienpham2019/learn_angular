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

  constructor(private _fb: FormBuilder){}

  ngOnInit(){ 
    this.registrationForm = this._fb.group({
      userName: ['' , [Validators.required , forbiddenValidator(/admin/)]],
      email: ['' , [Validators.required , forbiddenValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ , true)]],
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
    console.log(this.registrationForm.errors?.notMatch) 
  }
}
