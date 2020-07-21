import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router} from '@angular/router'

@Component({
  selector: 'app-testdetail',
  templateUrl: './testdetail.component.html',
  styleUrls: ['./testdetail.component.css']
})
export class TestdetailComponent implements OnInit {
  test_id: number
  constructor(private _route: ActivatedRoute , private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => this.test_id = parseInt(params.get('id')))
  }

  toPrev():void{
    this._router.navigate(['/test-detail', this.test_id - 1])
  }

  toNext():void{
    this._router.navigate(['/test-detail', this.test_id + 1])
  }

}
