import { Schema } from 'mongoose';
import { createReference } from '../lib/utilities';
import { contributionStatus } from '../lib/enums';
import MODELS from '../index';

const ContributionHistorySchema = new Schema({
  link: String,
  rejectionExplanation: String,
  notes: String,
  reviewer: createReference(MODELS.user),
  verdict: contributionStatus
});

module.exports = { ContributionHistorySchema };
