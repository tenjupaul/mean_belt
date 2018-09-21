var ReviewSchema = require('./review.js')
const mongoose = require('mongoose')

var RestaurantSchema = new mongoose.Schema({
    
name: {type: String, required: [true, "Name is required"], minlength: [3, "Name must be 3 characters or longer."]},
cuisine: {type: String, required: [true, "Cuisine is required"], minlength: [3, "Cuisine must be 3 characters or longer."]},
reviews: [ReviewSchema]

},{timestamps:true});



mongoose.model('Restaurant', RestaurantSchema);