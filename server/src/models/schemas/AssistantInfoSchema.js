import { Schema } from 'mongoose';
import { createReference } from '../lib/utilities';
import MODELS from '../index';

const AssistantInfoSchema = new Schema({
  events: [createReference(MODELS.event)],
  payments: [createReference(MODELS.payment)],
  favoritesConferences: [{
    event: createReference(MODELS.event),
    conferences: [createReference(MODELS.conferences)]
  }],
  favoritesSpeakers: [{
    event: createReference(MODELS.event),
    speakers: [createReference(MODELS.user)]
  }]
});

module.exports = { AssistantInfoSchema };
