import mongoose from 'mongoose';
import config from './config.json';

mongoose.Promise = global.Promise;

export default (callback) => {
  // connect to a database if needed, then pass it to `callback`:
  const db = mongoose.connect(config.dbUrl, (error) => {
    if (error) {
      console.error('Please make sure the MongoD is isntalled and running!');
      throw error;
    }
    callback(db);
  });
};
