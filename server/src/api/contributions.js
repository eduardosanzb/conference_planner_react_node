import { Router } from 'express';
import APICreator from './lib/createAPI';
import Contribution from '../models/Contribution';

const router = Router();
const contributionApi = new APICreator(Contribution);

router.get('/', contributionApi.list);
router.get('/:id', contributionApi.show);
router.post('/', contributionApi.create);
router.put('/:id', contributionApi.update);
router.delete('/:id', contributionApi.destroy);

module.exports = router;
