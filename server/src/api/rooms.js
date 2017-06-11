import { Router } from 'express';
import APICreator from './lib/createAPI';
import Event from '../models/Event';

const router = Router();
const eventApi = new APICreator(Event);

router.get('/', eventApi.list);
router.get('/:id', eventApi.show);
router.post('/', eventApi.create);
router.put('/:id', eventApi.update);
router.delete('/:id', eventApi.destroy);

module.exports = router;
