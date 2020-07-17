import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2> Welcome to {{title}} </h2> 
      <h3 *ngIf= displayMessage > This is hidden ? </h3> 
      <button (click) = "displayMessage = !displayMessage" >{{displayMessage ? 'hidden' : 'show' }}</button > 
    </div> 
  `,
  styles: []
})
export class TestComponent implements OnInit {
  title: string = "code evolution"
  displayMessage: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
