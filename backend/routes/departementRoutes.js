import { Router } from 'express';
const router = Router();
import { createDepartement, getAllDepartements } from '../controllers/departementController';

router.post('/', createDepartement);
router.get('/', getAllDepartements);

export default router;