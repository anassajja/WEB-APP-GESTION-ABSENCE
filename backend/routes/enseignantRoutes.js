import { Router } from 'express';
const router = Router();
import { createEnseignant, getAllEnseignants } from '../controllers/enseignantController.js';

router.post('/', createEnseignant);
router.get('/', getAllEnseignants);

export default router;