 /* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import MODELS from './index';
import Conference from './Conference';
import { contributionStatus } from './lib/enums';
// Helper functions
import { createReference } from './lib/utilities';

const ContributionSchema = new Schema({
  title: String,
  authors: [createReference(MODELS.user)],
  history: [
    {
      link: String,
      rejectionExplanation: String,
      notes: String,
      reviewer: createReference(MODELS.user),
      veridic: {
        type: String,
        enum: contributionStatus
      }
    }
  ],
  event: createReference(MODELS.event),
  conference: createReference(MODELS.conference)
});

ContributionSchema.virtual('last').get(function () {
  return this.history.slice(-1).pop();
});

ContributionSchema.methods.accept = function () {
  return new Promise(async (resolve, reject) => {
    try {
      const newConference = await Conference.create({
        name: this.title,
        description: 'Lorem ipsum',
        paper: this.last,
        event: this.event,
        speakers: this.authors
      });
      this.event.conferences.push(newConference);
      this.conference = newConference;
      await this.event.save();
      await this.save();
      resolve(this);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = mongoose.model(MODELS.contribution, ContributionSchema);
