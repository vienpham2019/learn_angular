import { Component , OnInit} from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormArray } from '@angular/forms' 

import { forbiddenValidator } from './validators/forbiddenValidator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registrationForm: FormGroup

  constructor(private _fb: FormBuilder){}

  ngOnInit(){ 
    this.registrationForm = this._fb.group({
      userName: ['' , [Validators.required , forbiddenValidator(/admin/)]],
      email: ['' , [Validators.required , forbiddenValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ , true)]],
      password: ['', [Validators.required , Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    })
  }

  _rt(formName){
    return this.registrationForm.get(formName)
  }

  classes(inputName){
    let validation = this._rt(inputName)
    return {
      'is-invalid': validation.touched && validation.invalid,
      'is-valid': validation.touched && validation.valid 
    }
  }

  error(inputName){
    return this.classes(inputName)["is-invalid"]
  }

  onSubmit(value){
    console.log(this.registrationForm)
  }
}
