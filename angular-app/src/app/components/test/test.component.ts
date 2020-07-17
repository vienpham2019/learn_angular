import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor= "let color of colors; index as i ; odd as o ; last as l ; first as f ; event as e"> 
      <h2> 
        odd_index?: {{o}} ____
        event_index?: {{e}} ____
        is_last_index: {{l}} ____
        is_first_index: {{f}} ____ 
        index: {{i}} ____
        <label [style.color] = color >color: {{color}}</label> ____
      </h2> 
    </div> 
    <label> First Name </label> 
    <input #first_name type='text' />
    <label> Last Name </label> 
    <input #last_name type='text' /> 
    <label> Age </label> 
    <input #age type = 'text' />
    <button (click) = "onClick(first_name.value, last_name.value , age.value)" >Submit </button> 
    <h2 [ngClass] = "messageClass" >{{greeting}}</h2> 
  `,
  styles: [
    `
    .color-red {color: red}
    .special-text {font-size: 3em}
    `
  ]
})
export class TestComponent implements OnInit {
  colors: string[] = ['red', 'green' , 'orange', 'purple']
  greeting: string = ""
  color_red: boolean = true
  special_text: boolean = true 
  messageClass = {
    "color-red": this.color_red, 
    "special-text": this.special_text
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(first_name , last_name , age):void {
    this.greeting = `Hi ${first_name} ${last_name}. Wellcome to my app, and you are ${age} years old.`
  }

}
