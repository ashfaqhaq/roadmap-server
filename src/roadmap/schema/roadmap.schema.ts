import * as mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
  name: String,
  link: String,
  desc:String,
  hour:String,
  isFree:Boolean,
  type:String

})
export const RoadmapSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy:String,
  createdEmail:String,
  steps: [StepSchema],
  rating: Number,
  preRequisite: String
});

