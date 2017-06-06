/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
// import moment from 'moment';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const BuildingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  address: String,
  coordinates: Boolean,
  rooms: [createReference(MODELS.room)],
  events: [createReference(MODELS.event)],
  conferences: [createReference(MODELS.conference)],
	// metadata - miscellaneous
  wifi: {
    name: String,
    password: String
  },
  parking: Boolean
});

module.exports = mongoose.model(MODELS.building, BuildingSchema);
