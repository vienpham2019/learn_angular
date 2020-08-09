import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(){ 
    fetch('http://localhost:5000/api/users/')
    .then(res => res.json())
    .then(data => console.log(data))
  }
}
