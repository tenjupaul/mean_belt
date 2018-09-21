import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {

  newRestaurant = {};
  error = {};
  constructor(
    private _httpService:HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newRestaurant={name:" ",cuisine:" "}
  }
  addNewRestaurant(){
    let observable = this._httpService.newRestaurant(this.newRestaurant);
    observable.subscribe(data =>{
      if (data['status'] == 200) {
        console.log(data)
        this._router.navigate(['/restaurant']);
      }
      else {
        this.error = data['errors'];
      }
    })
  }

}
