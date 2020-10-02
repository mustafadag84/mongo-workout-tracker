var router = require("express").Router();
var workout = require("../models/workout.js");

// find all worjouts
router.get("/api/workouts", function(req,res){
workout.find().then(function(data){
    console.log(data)
    res.json(data)
})
.catch(err => {
    res.status(400).json(err);
  });

});

// creates a new workout
router.post("/api/workouts", (req, res) => {
    workout.create({})
      .then(function(data) {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// updates the workout exercises
router.put("/api/workouts/:id", function(req,res){
    workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}})
    .then(function(data) {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// gets last 7 workouts
router.get("/api/workouts/range", (req, res) => {
    workout.find({}).limit(7)
      .then(function(dbWorkout) {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;