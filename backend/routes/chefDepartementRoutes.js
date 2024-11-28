import { Router } from 'express';
const router = Router();
import { createChefDepartement, getAllChefDepartements } from '../controllers/chefDepartementController.js';

router.post('/', createChefDepartement);
router.get('/', getAllChefDepartements);

export default router;
