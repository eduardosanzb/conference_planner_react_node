/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import { sponsorLevels } from './lib/enums';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const SponsorSchema = new Schema({
  name: String,
  image: String,
  website: String,
  facebook: String,
  twitter: String,
  youtube: String,
  events: [{
    event: createReference(MODELS.event),
    level: {
      type: String,
      enum: sponsorLevels
    }
  }]
});

module.exports = mongoose.model(MODELS.new, SponsorSchema);
