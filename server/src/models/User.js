/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import { PermissionSchema, SpeakerInfoSchema } from './schemas/rootSchemas';
import { getLevels, getHighest } from './lib/utilities';

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
  // Arrays are breaking
  permissions: [PermissionSchema],
  speakerInfo: [SpeakerInfoSchema]
});

UserSchema.virtual('maxPermission').get(function () {
  return this.permissions.map(getLevels).reduce(getHighest, 0);
});

module.exports = mongoose.model('user', UserSchema);
