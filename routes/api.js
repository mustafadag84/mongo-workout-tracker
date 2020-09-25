var router = require("express").Router();
var workout = require("../models/workout.js");

router.get("/api/workouts", function(req,res){
workout.find().then(function(data){
    console.log(data)
    res.json(data)
})

});

router.post("/api/workouts", function(req,res){
    
});


router.put("/api/workouts", function(req,res){
    
});


router.get("/api/workouts/range", function(req,res){
    
});



module.exports = router;