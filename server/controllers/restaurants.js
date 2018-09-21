
var mongoose = require('mongoose');
require("../models/restaurant.js");
var Restaurant = mongoose.model('Restaurant');
var Review = mongoose.model("Review");

module.exports = {
    addRestaurant: function(req, res){
        Restaurant.create(req.body, function(err,data){
            if (err){
                res.json(err)
            } else {
                res.json({status: 200, restaurant:data})
            }
        });
    },
    getAll: function(req, res){
        Restaurant.find({}, function(err,data){
            if(err){
                res.json(err)
            } else {
                res.json({restaurants: data})
            }
        })
    },
    getOne: function(req,res){
        Restaurant.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },
    updateRestaurant:function(req,res){
        Restaurant.findOneAndUpdate({_id:req.params.id},{$set:req.body},{runValidators: true},function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json({message:"updated", status:200})
            }
        })
    },
    deleteRestaurant: function(req, res) {
        // must delete truck and all reviews with it.
        Restaurant.remove({_id: req.params.id}, function(err) {
            if(err) {
                return res.json(err);
            }
            else {
                return res.json({message:"removed", status:200})
            }
        })
    },

    newReview: function(req, res) {
        console.log("in newReview");
        Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
            if(err){
                res.json(err)
            }
            else{
                if (restaurant.reviews.length>0){ 
                    for(let review of restaurant.reviews){
                        if(review.name==req.body.name){
                            return res.json({errors: {name: {message: 'This user has already written a review.'}}})
                        }
                    } 
                }
                Review.create(req.body, function(err, review){
                    console.log("creating review")
                    if (err){
                        res.json(err)
                    } else {

                        Restaurant.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: review}}, function(err){
                            console.log("adding review to restaurant")
                            if(err){
                                res.json(err);    
                            }else{
                                res.json({status: 200});
                            }
                        });
                    }
                });
            }
        });
        
    },
}
