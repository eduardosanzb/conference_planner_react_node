import util from 'util';
import mongoose from 'mongoose';
import config from './config.json';
const debug = require('debug')('express-mongoose-es6-rest-api:index');
mongoose.Promise = Promise;

export default async (callback) => {
  mongoose.connect(config.dbUrl, { server: { socketOption: { keepAlive: 1 } } });
  mongoose.connection.on('error', () => {
    throw new Error('unable to connect to mongodb');
  });

  if (config.MONGOOSE_DEBUG) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    });
  }
  callback(mongoose);
};
