import { Router } from 'express';
const router = Router();
import { createChefDepartement, getAllChefDepartements } from '../controllers/chefDepartementController';

router.post('/', createChefDepartement);
router.get('/', getAllChefDepartements);

export default router;
