/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import _ from 'lodash';
import { Schema } from 'mongoose';
import { globalPermissions } from '../../config.json';
import { createReference, getMatchLevel } from '../lib/utilities';
import MODELS from '../index';


const PermissionSchema = new Schema({
  name: {
    type: String,
    enum: _.values(globalPermissions),
    required: true
  }
});
PermissionSchema.virtual('level').get(function () {
  return _.entries(globalPermissions)
		.reduce(getMatchLevel.bind(null, this.name), Number.MAX_SAFE_INTEGER);
});

const SpeakerInfoSchema = new Schema({
  contributions: [createReference(MODELS.contributions)],
  conferences: [createReference(MODELS.conferences)]
});

const BookedHoursSchema = new Schema({
  duration: {
    type: Number,
    required: true,
    min: 30,
    default: 30
  },
  start: {
    type: Date,
    required: true
  },
  event: createReference(MODELS.event),
  conference: createReference(MODELS.conference)
});

module.exports = {
  PermissionSchema,
  SpeakerInfoSchema,
  BookedHoursSchema
};
