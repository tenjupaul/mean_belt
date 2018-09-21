import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent implements OnInit {

  restaurant={}
  error={}

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  editRestaurant(id){
    let observable=this._httpService.updateRestaurant(id,this.restaurant);
    observable.subscribe(data =>{
      console.log(data)
      if(data["status"] === 200) {
        this._router.navigate(['/restaurant']);
      }
      else {
        this.error = data["errors"];
      }
    })
  }

  ngOnInit() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getRestaurant( params["id"]);
      observable.subscribe( data => {
        this.restaurant = data;
        console.log(this.restaurant)
      }); 
    }); 
  }

}
