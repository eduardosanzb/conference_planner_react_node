/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import { typeOfConferences } from './lib/enums';
import { ScheduleSchema, ContributionHistorySchema } from './schemas/rootSchemas';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const ConferenceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: typeOfConferences
  },
  paper: ContributionHistorySchema,
  topic: String,
  event: createReference(MODELS.event),
  speakers: [createReference(MODELS.user)],
  room: createReference(MODELS.room),
  schedule: ScheduleSchema,
  maxNumberAttendees: {
    type: Number,
    default: null
  },
  reviews: [createReference(MODELS.review)],
  subscriptions: [createReference(MODELS.user)]

});

module.exports = mongoose.model(MODELS.conference, ConferenceSchema);
