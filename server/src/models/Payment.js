/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
// import moment from 'moment';
import MODELS from './index';
// Helper functions
import { createReference } from './lib/utilities';

const PaymentSchema = new Schema({
  event: createReference(MODELS.event),
  user: createReference(MODELS.user),
  reference: String
});

module.exports = mongoose.model(MODELS.payment, PaymentSchema);
