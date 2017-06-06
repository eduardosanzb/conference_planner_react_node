/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
// import moment from 'moment';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  lastDateContributions: {
    type: Date,
    default: null
  },
  description: String,
  needsPayment: Boolean,
  arrivalInformation: String,
  site: String,
	// this is the schedule of the event
  conferences: [createReference(MODELS.conference)],
  contributions: [createReference(MODELS.contribution)],
  organizers: {
    type: [createReference(MODELS.user)],
    required: true
  },
  sponsors: [createReference(MODELS.sponsor)],
  speakers: [createReference(MODELS.user)],
  staff: [createReference(MODELS.user)],
  assistants: [createReference(MODELS.user)],
	// metadata - miscellaneous
  wifi: {
    name: String,
    password: String
  },
  paymentReferences: [createReference(MODELS.payment)],
  faqs: [{
    question: String,
    answer: String
  }],
  facebook: String,
  twitter: String,
  youtube: String,
  codeOfConduct: String,
  news: [createReference(MODELS.new)]
});

module.exports = mongoose.model(MODELS.event, EventSchema);
