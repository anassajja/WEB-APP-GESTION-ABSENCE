import { Router } from 'express';
const router = Router();
import { createFiliere, getAllFilieres } from '../controllers/filiereController.js';

router.post('/', createFiliere);
router.get('/', getAllFilieres);

export default router;