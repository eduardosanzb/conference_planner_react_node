/* eslint no-confusing-arrow: 0 */
import moment from 'moment';
import { Schema } from 'mongoose';

/**
* @param  {String} model - to create a reference
* @return {Object} { type: ObjectId, ref: model }
*/
const createReference = model => ({
  type: Schema.Types.ObjectId,
  ref: model
});

// For permissions
const getLevels = c => c.level;
const getHighest = (prev, c) => c < prev ? c : prev;
const getMatchLevel = (actual, prevVal, [level, name]) => actual === name ? level : prevVal;

// For rooms
const sameDay = (k, x) => !(k.isAfter(x.moment, 'day') || k.isBefore(x.moment, 'day'));
const toMoment = d => Object.assign(d, { moment: moment(d.date) });
const getRoomResult = (k, x) => Object.assign(x, { result: k.isBetween(x.min, x.max, 'minute') });
const getMinMaxTime = h => Object.assign(
  h.toObject(),
  { min: moment(h.start), max: moment(h.start).add(h.duration, 'm') }
);
const byOverLap = x => x.result === true;
const getRoomStatus = x => x.status;

module.exports = {
  createReference,
  // permissions
  getLevels,
  getHighest,
  getMatchLevel,
  // rooms
  sameDay,
  toMoment,
  getRoomResult,
  getMinMaxTime,
  byOverLap,
  getRoomStatus
};
