import { Schema } from 'mongoose';

const ScheduleSchema = new Schema({
  date: {
    type: Date,
  },
  startTime: {
    type: Date,
  },
  duration: {
    type: Number,
    min: 30,
    default: 30
  }
});

module.exports = { ScheduleSchema };
