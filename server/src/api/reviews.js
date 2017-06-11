import { Router } from 'express';
import APICreator from './lib/createAPI';
import Review from '../models/Review';

const router = Router();
const ReviewApi = new APICreator(Review);

router.get('/', ReviewApi.list);
router.get('/:id', ReviewApi.show);
router.post('/', ReviewApi.create);
router.put('/:id', ReviewApi.update);
router.delete('/:id', ReviewApi.destroy);

module.exports = router;
