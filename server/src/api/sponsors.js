import { Router } from 'express';
import APICreator from './lib/createAPI';
import Conference from '../models/Conference';

const router = Router();
const conferenceApi = new APICreator(Conference);

router.get('/', conferenceApi.list);
router.get('/:id', conferenceApi.show);
router.post('/', conferenceApi.create);
router.put('/:id', conferenceApi.update);
router.delete('/:id', conferenceApi.destroy);

module.exports = router;
