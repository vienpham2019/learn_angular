import { Component , OnInit} from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormArray } from '@angular/forms' 

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
      userName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })
  }
}
