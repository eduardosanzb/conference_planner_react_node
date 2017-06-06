/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
// import moment from 'moment';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const NewSchema = new Schema({
  title: String,
  date: Date,
  content: String,
  author: createReference(MODELS.user)
});

module.exports = mongoose.model(MODELS.new, NewSchema);
