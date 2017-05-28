import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
  const api = Router();

	// mount the facets resource
  api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ users: [{ id: 1, username: 'lalo' }] });
  });

  return api;
};
