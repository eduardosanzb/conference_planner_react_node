/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import MODELS from './index';
import { ContributionHistorySchema } from './schemas/rootSchemas';
import { contributionStatus } from './lib/enums';
// Helper functions
import { createReference } from './lib/utilities';

const ContributionSchema = new Schema({
  title: String,
  authors: [createReference(MODELS.user)],
  history: [ContributionHistorySchema],
  status: {
    type: String,
    enum: contributionStatus,
    default: 'TO REVIEW'
  },
  conference: createReference[MODELS.conference]
});

ContributionSchema.virtual('last').get(function () {
  return this.history.slice(-1).pop();
});

ContributionSchema.methods.accept(() => {
  this.status = 'ACCEPTED';
	// TODO: create a conference
});

module.exports = mongoose.model(MODELS.event, ContributionSchema);
