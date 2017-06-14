/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import { typeOfConferences, contributionStatus } from './lib/enums';
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
  paper: {
    link: String,
    rejectionExplanation: String,
    notes: String,
    reviewer: createReference(MODELS.user),
    veridic: {
      type: String,
      enum: contributionStatus
    }
  },
  topic: String,
  event: createReference(MODELS.event),
  speakers: [createReference(MODELS.user)],
  room: createReference(MODELS.room),
  schedule: {
    date: {
      type: Date
    },
    startTime: {
      type: Date
    },
    duration: {
      type: Number,
      min: 30
    }
  },
  maxNumberAttendees: {
    type: Number,
    default: null
  },
  reviews: [createReference(MODELS.review)],
  subscriptions: [createReference(MODELS.user)]
});

module.exports = mongoose.model(MODELS.conference, ConferenceSchema);
