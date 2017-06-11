import mongoose from 'mongoose';
import User from './User';
mongoose.Promise = Promise;

const commonUser = {
  firstName: 'lalo',
  lastName: 'sanz',
  email: 'test@test.com' };

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
    const joe = new User(commonUser);
    try {
      await joe.save();
      expect(joe.email).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });

  it('should throw error for the invalid permissionSchema', async () => {
    const joe = new User(Object.assign(commonUser, {
      permissions: [{ name: 'ORGANIZER' }]
    }));
    try {
      joe.permissions.push({ name: 'admin' });
      await joe.save();
    } catch (error) {
      expect(error.message).not.toBeNull();
    }
  });

  it('should have a length of two permissions', async () => {
    const joe = new User({
      firstName: 'lalo',
      lastName: 'sanz',
      email: 'test@test.com',
      permissions: [{ name: 'ORGANIZER' }]
    });
    try {
      joe.permissions.push({ name: 'ADMIN' });
      await joe.save();
      expect(joe.permissions).toHaveLength(2);
    } catch (error) {
      console.log(error.message);
    }
  });
});
