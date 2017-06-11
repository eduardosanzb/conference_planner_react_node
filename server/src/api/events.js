import { Router } from 'express';
import APICreator from './lib/createAPI';
import Event from '../models/Event';

const router = Router();
const EventApi = new APICreator(Event);

router.get('/', EventApi.list);
router.get('/:id', EventApi.show);
router.post('/', EventApi.create);
router.put('/:id', EventApi.update);
router.delete('/:id', EventApi.destroy);

module.exports = router;
