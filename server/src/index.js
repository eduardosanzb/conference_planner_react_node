import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

import User from './models/User';

const app = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
  exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
  limit: config.bodyLimit
}));

initializeDb(async (mongoose) => {
  const joe = new User({
    firstName: 'JOe'
  });
  joe.save();

	// internal middleware
  app.use(middleware({ config, mongoose }));

	// api router
  app.use('/api', api({ config, mongoose }));

  const server = http.createServer(app);
  server.listen(process.env.PORT || config.port);

  console.log(`Started on port ${server.address().port}`);
});

export default app;
