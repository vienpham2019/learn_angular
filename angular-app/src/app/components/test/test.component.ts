import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2> Welcome to {{title}} </h2> 
      <button (click) = "onClick()">Greeting</button> 
      <button (click) = "greeting=''">Clear Greeting</button> 
      <h2>{{greeting}}</h2> 
    </div> 
  `,
  styles: []
})
export class TestComponent implements OnInit {
  title: string = "code evolution"
  greeting: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.greeting = "hi new user. Welcome to code evolution"
  }

}
