import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-readreviews',
  templateUrl: './readreviews.component.html',
  styleUrls: ['./readreviews.component.css']
})
export class ReadreviewsComponent implements OnInit {

  reviews=[]
  restaurant:any;
  
  sortedReview=[]
  
  sortReviews(reviews){
    for(var i=0; i<reviews.length;i++){
      for(var j=0;j<reviews.length-1; j++){
        if (reviews[j]['rating']<reviews[j+1]['rating']){
          console.log(reviews[j]['rating'])
          console.log(reviews[j+1]['rating'])
          var temp = reviews[j]
          reviews[j]=reviews[j+1]
          reviews[j+1]=temp
        }
      }
    }
    return reviews
  }


  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getRestaurant( params["id"]);
      observable.subscribe( data => {
        this.reviews = data['reviews'];
        this.restaurant=data['name']
        this.sortedReview=this.sortReviews(this.reviews)
      }); 
    }); 
  }

}
