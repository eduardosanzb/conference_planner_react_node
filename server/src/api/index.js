import { Router } from 'express';
import users from './users';

/**
* @function configureApi
* @param  {Object} config.config {description}
* @param  {Object} config.db - Mongoose connection
* @return {Function} (model) => @returns configured endpoint
*/
const configureApi = config => model => model(config);

export default ({ config, db }) => {
  const api = Router();
  const configure = configureApi({ config, db });

	// Models
  // api.use('/facets', configure(facets));
  // api.use('/users', configurator(users));

	// perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ users: [{ id: 1, username: 'lalo' }] });
  });

  return api;
};
