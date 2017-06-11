import { Router } from 'express';
import APICreator from './lib/createAPI';
import User from '../models/User';

const router = Router();
const userApi = new APICreator(User);

router.get('/', userApi.list);
router.get('/:id', userApi.show);
router.post('/', userApi.create);
router.put('/:id', userApi.update);
router.delete('/:id', userApi.destroy);

module.exports = router;
