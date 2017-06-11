/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import MODELS from './index';
import Conference from './Conference';
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
  event: createReference(MODELS.event),
  conference: createReference(MODELS.conference)
});

ContributionSchema.virtual('last').get(function () {
  return this.history.slice(-1).pop();
});

ContributionSchema.methods.accept = async function () {
  this.status = 'ACCEPTED';
  const newConference = await Conference.create({
    name: this.title,
    description: 'Lorem ipsum',
    paper: this.last,
    event: this.event,
    speakers: this.authors
  });
  newConference.save();
  this.conference = newConference;
};

module.exports = mongoose.model(MODELS.contribution, ContributionSchema);
