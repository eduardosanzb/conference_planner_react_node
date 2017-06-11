/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const ReviewSchema = new Schema({
  conference: createReference(MODELS.review),
  anonymous: {
    type: Boolean,
    required: true,
    default: true
  },
  user: createReference(MODELS.user),
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  notes: String
});

module.exports = mongoose.model(MODELS.review, ReviewSchema);
