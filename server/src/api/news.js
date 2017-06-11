import { Router } from 'express';
import APICreator from './lib/createAPI';
import New from '../models/New';

const router = Router();
const NewApi = new APICreator(New);

router.get('/', NewApi.list);
router.get('/:id', NewApi.show);
router.post('/', NewApi.create);
router.put('/:id', NewApi.update);
router.delete('/:id', NewApi.destroy);

module.exports = router;
