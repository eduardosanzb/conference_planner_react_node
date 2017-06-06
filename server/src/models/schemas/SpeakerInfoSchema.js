import { Schema } from 'mongoose';
import { createReference } from '../lib/utilities';
import MODELS from '../index';

const SpeakerInfoSchema = new Schema({
  contributions: [createReference(MODELS.contributions)],
  conferences: [createReference(MODELS.conferences)]
});

module.exports = { SpeakerInfoSchema };
