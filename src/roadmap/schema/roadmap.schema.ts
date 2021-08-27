import * as mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
  courseDescription: String,
  addedOn: Date,
  hoursNeeded:Number

})
export const RoadmapSchema = new mongoose.Schema({
  name: String,
  description: String,
  curatorName:String,
  curatorEmail:String,
  steps: [StepSchema],
  rating: Number,
  preRequisite: String
});

