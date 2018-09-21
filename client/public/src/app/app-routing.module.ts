import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { ReadreviewsComponent } from './readreviews/readreviews.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';

const routes: Routes = [
  { path: 'restaurant', component: HomeComponent,children:[
    { path: ':id/edit',component:EditrestaurantComponent}
  ]},
  { path: 'restaurant/new',component:NewrestaurantComponent},
  { path: 'restaurant/:id',component:ReadreviewsComponent},
  { path: 'restaurant/:id/review',component:NewreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
