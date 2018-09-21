import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timeDelta:any= new Date().getTime()
  created:any;

  restaurants=[]
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  getRestaurants(){
    let observable = this._httpService.getRestaurants()
    observable.subscribe(data => {
      this.restaurants = data['restaurants'];
      for (var i=0; i< this.restaurants.length;i++){
        var createdAt = new Date(this.restaurants[i]['createdAt']).getTime()
        var diff = this.timeDelta-createdAt
        console.log(diff)
        if(diff<30000){
          this.restaurants[i]['canDelete']=true
          console.log(this.timeDelta)
          console.log(createdAt)
        }
        else{
          this.restaurants[i]['canDelete']=false
        }
      }
    });
  }
  deleteOnClick(_id){
    let observable=this._httpService.deleteRestaurant(_id);
    observable.subscribe(data=>{
      this.getRestaurants()
    })
  }

  ngOnInit() {
    this.getRestaurants()
    console.log("initial",this.timeDelta)
    // this.timeDelta.setTime(this.timeDelta.getTime() + 30000).getTime();
    console.log("after",this.timeDelta)
  }

}
