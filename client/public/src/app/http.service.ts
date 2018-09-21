import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  newRestaurant(newRestaurant){
    return this._http.post('/restaurants',newRestaurant)
  }
  getRestaurants(){
    return this._http.get('/restaurants')
  }
  deleteRestaurant(id){
    return this._http.delete(`/restaurants/${id}`)
  }
  getRestaurant(id){
    return this._http.get(`/restaurants/${id}`)
  }
  updateRestaurant(id,restaurant){
    return this._http.put(`/restaurants/${id}`,restaurant)
  }
  createReview(id, review){
    return this._http.post(`/restaurants/${id}/review`,review)
  }
  
}
