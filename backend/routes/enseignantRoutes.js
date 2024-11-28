import { Router } from 'express';
const router = Router();
import { createEnseignant, getAllEnseignants } from '../controllers/enseignantController';

router.post('/', createEnseignant);
router.get('/', getAllEnseignants);

export default router;