/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import { Schema } from 'mongoose';
import { createReference } from '../lib/utilities';
import MODELS from '../index';

const BookedHoursSchema = new Schema({
  duration: {
    type: Number,
    required: true,
    min: 30,
    default: 30
  },
  start: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'BOOKED'],
    required: true
  },
  event: createReference(MODELS.event),
  conference: createReference(MODELS.conference)
});

module.exports = { BookedHoursSchema };
