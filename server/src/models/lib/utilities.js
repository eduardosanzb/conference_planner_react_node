/* eslint no-confusing-arrow: 0 */
import { Schema } from 'mongoose';

export const createReference = model => ({
  type: Schema.Types.ObjectId,
  ref: model
});

export const getLevels = c => c.level;
export const getHighest = (prev, c) => c < prev ? c : prev;
export const getMatchLevel = (actual, prevVal, [level, name]) => actual === name ? level : prevVal;
