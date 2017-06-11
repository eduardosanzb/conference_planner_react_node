import { Schema } from 'mongoose';

const ScheduleSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 30,
    default: 30
  }
});

module.exports = { ScheduleSchema };
