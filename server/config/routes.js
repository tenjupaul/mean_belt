var Restaurants = require('./../controllers/restaurants.js')
module.exports = function(app){
    app.get('/restaurants', Restaurants.getAll)
    app.post('/restaurants', Restaurants.addRestaurant)
    app.get('/restaurants/:id', Restaurants.getOne)
    app.put('/restaurants/:id', Restaurants.updateRestaurant)
    app.delete("/restaurants/:id", Restaurants.deleteRestaurant);
    app.post("/restaurants/:id/review", Restaurants.newReview);
}