import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  topics: string[] = ["React" , "Angular" , "Vu" , "Go"]
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm){
    console.log(userForm.value)
    userForm.reset()
  }

}
