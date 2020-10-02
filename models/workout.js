const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
 
  day: {
    type: Date,
    default: Date.now
  },

  exercises:[{
name: {type:String},
type:{type:String},
weight:{type:Number},
sets:{type:Number},
reps:{type:Number},
duration:{type:Number},
distance:{type:Number}
  }]
},
{    toJSON: {virtuals: true  }  }
);



ExampleSchema.virtual("totalDuration").get(function () {  // "reduce" array of exercises down to just the sum of their durations
return this.exercises.reduce((total, exercise) => {    return total + exercise.duration;  }, 0);});



const Example = mongoose.model("Workout", ExampleSchema);



module.exports = Example;