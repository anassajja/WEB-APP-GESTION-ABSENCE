import { Router } from 'express';
const router = Router();
import { createDepartement, getAllDepartements } from '../controllers/departementController.js';

router.post('/', createDepartement);
router.get('/', getAllDepartements);

export default router;