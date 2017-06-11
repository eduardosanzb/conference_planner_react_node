import { Router } from 'express';
import APICreator from './lib/createAPI';
import Building from '../models/Building';

const router = Router();
const buildingApi = new APICreator(Building);

router.get('/', buildingApi.list);
router.get('/:id', buildingApi.show);
router.post('/', buildingApi.create);
router.put('/:id', buildingApi.update);
router.delete('/:id', buildingApi.destroy);

module.exports = router;
