/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import _ from 'lodash';
import { Schema } from 'mongoose';
import { globalPermissions } from '../../config.json';
import { createReference, getMatchLevel } from '../lib/utilities';


export const PermissionSchema = new Schema({
  name: {
    type: String,
    enum: _.values(globalPermissions),
    required: true
  }
});
PermissionSchema.virtual('level').get(function () {
  return _.entries(globalPermissions)
		.reduce(getMatchLevel.bind(null, this.name));
});

export const SpeakerInfoSchema = new Schema({
  contributions: [createReference('Contributions')],
  conferences: [createReference('Conferences')]
});
