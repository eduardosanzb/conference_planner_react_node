/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import {
  PermissionSchema,
  SpeakerInfoSchema,
  AssistantInfoSchema,
  StaffInfoSchema
} from './schemas/rootSchemas';
import { getLevels, getHighest, createReference } from './lib/utilities';
import MODELS from './index';

const UserSchema = new Schema({
  firstName: {
    type: String,
    index: true
  },
  lastName: {
    type: String,
    index: true
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
  permissions: [PermissionSchema],
  speakerInfo: SpeakerInfoSchema,
  assistantInfo: AssistantInfoSchema,
  staffInfo: StaffInfoSchema
});

UserSchema.virtual('maxPermission').get(function () {
  return this.permissions.map(getLevels).reduce(getHighest, 0);
});

module.exports = mongoose.model(MODELS.user, UserSchema);
