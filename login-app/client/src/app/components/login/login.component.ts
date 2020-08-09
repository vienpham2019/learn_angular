import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder , FormGroup } from '@angular/forms'

import { forbiddenValidator } from '../../validators/forbiddenValidator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required , forbiddenValidator(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ , true)]], 
      password: ['', Validators.required]
    })
  }

  _cn(controlName){
    return this.loginForm.get(controlName)
  }

  classes(controlName) {
    let control = this._cn(controlName)
    return {
      'is-invalid': control.touched && control.invalid, 
      'is-valid': control.touched && control.valid
    }
  }

  error(controlName) { 
    return this.classes(controlName)['is-invalid']
  }
}
