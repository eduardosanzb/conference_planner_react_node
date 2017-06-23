import building from './buildings';
import conference from './conferences';
import contribution from './contributions';
import event from './events';
import news from './news';
import review from './reviews';
import room from './rooms';
import sponsor from './sponsors';
import user from './users';
import login from './login';
import authenticate from './authenticate';
import auth from './lib/tokenMiddleware';

const api = (app) => {
  // public
  app.use('/api/auth', authenticate);
  app.use('/api/login', login);
  // with auth
  app.use('/api/building', auth, building);
  app.use('/api/conference', auth, conference);
  app.use('/api/contribution', auth, contribution);
  app.use('/api/event', auth, event);
  app.use('/api/news', auth, news);
  app.use('/api/review', auth, review);
  app.use('/api/room', auth, room);
  app.use('/api/sponsor', auth, sponsor);
  app.use('/api/user', auth, user);
};

module.exports = api;
