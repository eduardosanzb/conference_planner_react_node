/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import _ from 'lodash';
import mongoose, { Schema } from 'mongoose';
import {
  SpeakerInfoSchema,
  AttendantInfoSchema,
  StaffInfoSchema
} from './schemas/rootSchemas';
import { globalPermissions } from './lib/enums';
import { getLevels, getHighest, createReference, getMatchLevel } from './lib/utilities';
import MODELS from './index';

const UserSchema = new Schema({
  firstName: {
    type: String,
    index: true,
    required: true
  },
  lastName: {
    type: String,
    index: true,
    required: true
  },
  email: {
    type: String,
    index: true,
    required: true
  },
  activated: {
    type: Boolean,
    default: false
  },
  profilePicture: {
    type: String
  },
  birthDate: {
    type: Date
  },
  country: String,
  company: String,
  institution: String,
  friends: [createReference(MODELS.user)],
  events: [createReference(MODELS.event)],
  permissions: [{
    name: {
      type: String,
      enum: _.values(globalPermissions)
    }
  }],
  speakerInfo: SpeakerInfoSchema,
  attendantInfo: AttendantInfoSchema,
  staffInfo: StaffInfoSchema
});

UserSchema.virtual('maxPermission').get(function () {
  return this.permissions.map(getLevels).reduce(getHighest, 0);
});

UserSchema.virtual('permissionLevel').get(function () {
  return _.entries(globalPermissions)
		.reduce(getMatchLevel.bind(null, this.name), Number.MAX_SAFE_INTEGER);
});

module.exports = mongoose.model(MODELS.user, UserSchema);
