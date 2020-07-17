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
  `,
  styles: []
})
export class TestComponent implements OnInit {
  colors: string[] = ['red', 'green' , 'orange', 'purple']
  constructor() { }

  ngOnInit(): void {
  }

}
