import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurant = {}; 
  constructor() { }

  ngOnInit() {
  }

}
