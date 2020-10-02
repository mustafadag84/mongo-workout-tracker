var router = require("express").Router();
var workout = require("../models/workout.js");


router.get("/api/workouts", function(req,res){
workout.find().then(function(data){
    console.log(data)
    res.json(data)
})
.catch(err => {
    res.status(400).json(err);
  });

});


router.post("/api/workouts", ({ body }, res) => {
    workout.create(body)
      .then(function(data) {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workouts", function(req,res){
    
});


router.post("/api/workouts/range", ({ body }, res) => {
    workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;