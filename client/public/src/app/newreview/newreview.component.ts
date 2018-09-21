import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {

  restaurant={}
  error = {}
  newReview = {rating: 5}
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  createReview(_id){
    let observable = this._httpService.createReview(_id, this.newReview);
    observable.subscribe( data => {
      if (data['status'] == 200) {
        this._router.navigate([`/restaurant/${_id}`]);
      } else {
        this.error = data['errors'];
      }
    })
  }

  ngOnInit() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getRestaurant( params["id"]);
      observable.subscribe( data => {
        this.restaurant = data;
      }); 
    }); 
  }

}
