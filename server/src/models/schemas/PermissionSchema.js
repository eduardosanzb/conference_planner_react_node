/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import _ from 'lodash';
import { Schema } from 'mongoose';
import { globalPermissions } from '../lib/enums';
import { getMatchLevel } from '../lib/utilities';


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

module.exports = { PermissionSchema };
