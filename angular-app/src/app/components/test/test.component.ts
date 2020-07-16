import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      hello {{title}}
      <br>
      <h2 [ngClass] = "messageClass"> This is message </h2> 
      <h2 [class.text-success] = "success"> This is message </h2> 
    </div> 
  `,
  styles: [`
    .text-success {
      color: green
    }

    .text-danger {
      color: red
    }

    .text-special {
      font-size: 2em
    }
  `]
})
export class TestComponent implements OnInit {
  title: string = 'My first angular app.'
  myId: string = 'testId'
  spectial: boolean = false
  success: boolean = false
  messageClass = {
    "text-danger": !this.success,
    "text-success": this.success,
    'text-special': this.spectial
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetingUser () {
    return 'Hello new User. '
  }

}
