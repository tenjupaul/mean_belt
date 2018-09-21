import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { ReadreviewsComponent } from './readreviews/readreviews.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewrestaurantComponent,
    ReadreviewsComponent,
    NewreviewComponent,
    RestaurantsComponent,
    EditrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
