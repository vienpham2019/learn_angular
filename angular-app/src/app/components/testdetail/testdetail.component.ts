import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-testdetail',
  templateUrl: './testdetail.component.html',
  styleUrls: ['./testdetail.component.css']
})
export class TestdetailComponent implements OnInit {
  test_id: string 
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let {id} = this._route.snapshot.params
    this.test_id = id 
  }

}
