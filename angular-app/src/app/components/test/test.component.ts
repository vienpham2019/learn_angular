import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> {{ name | lowercase }} </h2> 
    <h2> {{ name | uppercase }} </h2>  
    <h2> {{ message | titlecase }} </h2> 
    <h2> {{ name | slice:2:6 }} </h2> 
    <h2> {{ person | json }} </h2> 

    <h2> {{ myNumber | number:'3.2-4' }} </h2> 
    <h2> {{ myNumber | number:'1.4-6' }} </h2> 
    <h2> {{ myNumber | number:'2.1-2' }} </h2> 

    <h2> {{ 0.25 | percent }} </h2> 
    <h2> {{ 0.25 | currency }} </h2> 
    <h2> {{ 0.25 | currency: 'GBP' }} </h2> 
    <h2> {{ 120000 | currency: 'VND ': 'code' }} </h2> 

    <h2> {{ date }} </h2> 
    <h2> {{ date | date:'short' }} </h2> 

  `, 
  styles: []
})
export class TestComponent implements OnInit {
  name: string = "My first angular app"
  message: string = "Welcome to my app"
  person: any = {
    "first_name": "Vien",
    "last_name": "Pham"
  }
  myNumber: number = 15.331
  date: any = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
