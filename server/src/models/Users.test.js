import mongoose from 'mongoose';
import User from './User';
mongoose.Promise = Promise;

beforeAll((done) => {
  mongoose.connect('mongodb://127.0.0.1/test');
  const db = mongoose.connection;
  db.on('error', (err) => {
    done.fail(err);
  });
  db.once('open', () => {
    done();
  });
});

describe('User model', async () => {
  it('should throw error is no required fields', async () => {
    const joe = new User({ firstName: 'lalo' });
    try {
      await joe.save();
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });

  it('should create a user with an email', async () => {
    const joe = new User({ firstName: 'lalo', email: 'test@test.com' });
    try {
      await joe.save();
      expect(joe.email).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });

  it('should throw error for the invalid permissionSchema', async () => {
    const joe = new User({
      firstName: 'lalo',
      email: 'test@test.com',
      test: [{ name: 'admin' }]
    });
    try {
      await joe.save();
      expect(joe.test).toHaveLength(1);
    } catch (error) {
      console.log(error);
    }
  });
});
