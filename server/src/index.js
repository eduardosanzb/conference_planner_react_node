const env = process.env.ENV || 'dev';
console.log('==========AQUI=========');
console.log(env);
  require('babel-polyfill');
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import fakeDB from './fakeDb';

const app = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

initializeDb(async mongoose => {
  // internal middleware
  app.use(middleware({ config, mongoose }));

  if (config.MOONGOSE_DEBUG) {
    try {
      if (env === 'dev') {
        fakeDB();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // api router
  api(app);

  const server = http.createServer(app);
  server.listen(process.env.PORT || config.port);

  console.log(`Started on port ${server.address().port}`);
});

export default app;
