/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
import mongoose, { Schema } from 'mongoose';
import moment from 'moment';
import MODELS from './index';
import { createReference } from './lib/utilities';
import { BookedHoursSchema } from './schemas/rootSchemas';
// Helper functions
const sameDay = (k, x) => !(k.isAfter(x.moment, 'day') || k.isBefore(x.moment, 'day'));
const toMoment = d => (Object.assign(d, { moment: moment(d.date) }));
const overLaps = (k, { min, max }) => k.isBetween(min, max, 'minute');
const getMinMaxTime = h => ({ min: moment(h.start), max: moment(h.start).add(h.duration, 'm') });

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

RoomSchema.methods.isAvailable = function (date) {
  const newDate = moment(date);
  const existedDate = this.schedule.map(toMoment).find(sameDay.bind(null, newDate));
  if (!existedDate) {
    return true;
  }
  const results = existedDate.bookedHours.map(getMinMaxTime).map(overLaps.bind(null, newDate));
  return results.every(e => e === false);
};


module.exports = mongoose.model('room', RoomSchema);
