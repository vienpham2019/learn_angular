import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2> Welcome to {{title}} </h2> 
      <input [(ngModel)] = "first_name" type='text' />{{first_name}} <br> 
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

}
