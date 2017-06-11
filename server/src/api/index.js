import user from './users';

const api = (app) => {
  app.use('/api/user', user);
};

module.exports = api;
