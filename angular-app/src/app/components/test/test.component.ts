import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2> Welcome to {{title}} </h2> 
      <input #myInput type='text'/> 
      <button (click) = "logMessage(myInput.value)">Log</button> 
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

  logMessage (value) {
    console.log(value)
  }

}
