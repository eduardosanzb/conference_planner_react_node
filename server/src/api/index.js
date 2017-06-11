import building from './buildings';
import conference from './conferences';
import contribution from './contributions';
import event from './events';
import news from './news';
import review from './reviews';
import room from './rooms';
import sponsor from './sponsors';
import user from './users';

const api = (app) => {
  app.use('/api/building', building);
  app.use('/api/conference', conference);
  app.use('/api/contribution', contribution);
  app.use('/api/event', event);
  app.use('/api/news', news);
  app.use('/api/review', review);
  app.use('/api/room', room);
  app.use('/api/sponsor', sponsor);
  app.use('/api/user', user);
};

module.exports = api;
