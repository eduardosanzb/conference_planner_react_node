import { Schema } from 'mongoose';
import { createReference } from '../lib/utilities';
import MODELS from '../index';

const StaffInfoSchema = new Schema({
  events: [createReference(MODELS.event)]
});

module.exports = { StaffInfoSchema };
