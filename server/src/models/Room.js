/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import moment from 'moment';
import MODELS from './index';
import { createReference } from './lib/utilities';
import { BookedHoursSchema } from './schemas/rootSchemas';

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  openHour: {
    type: Date,
    required: true
  },
  closedHour: {
    type: Date,
    required: true
  },
  schedule: [{
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    bookedHours: [BookedHoursSchema]
  }],
  seats: {
    type: Number,
  },
  typeOfRoom: {
    type: String,
    enum: ['LABORATORY', 'CLASSROOM', 'STAGE'], // TODO: PUT MORE
  },
  desks: {
    type: Number,
    min: 0,
    default: 0,
    index: true
  },
  computers: {
    type: Number,
    min: 0,
    default: 0,
    index: true
  },
  projectors: {
    type: Number,
    min: 0,
    default: 0,
    index: true
  },
  televisions: {
    type: Number,
    min: 0,
    default: 0,
    index: true
  },
  handicapFriendly: {
    type: Boolean,
    index: true
  },
  floor: {
    type: Number,
    min: 0,
    index: true
  },
  bestSuitFor: {
    type: String
  },
  building: {
    type: createReference(MODELS.building)
  },
  coordinates: {
    type: Schema.Types.Mixed
  }
});

const sameDay = (k, x) => !(k.isAfter(x, 'day') || k.isBefore(x, 'day'));
const toMoment = d => moment(d.date);
RoomSchema.statics.isAvailable = function (date, cb) {
  const newDate = moment(date).set('hours', 0);
  const existedDate = this.schedule.map(toMoment)
											.find(sameDay.bind(null, newDate));
  if (!existedDate) {
    cb(true);
  }
	// todo here continue
  const results = existedDate.bookedHours.find((h) => {
    const min = moment(h.start);
    const max = moment(min.add(h.duration, 'm'));
    return !(DATE > min || DATE < max);
  });
  console.log(results);
  return results.every(e => e === true);
};


module.exports = mongoose.model('room', RoomSchema);
