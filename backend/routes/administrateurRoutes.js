import { Router } from 'express';
const router = Router();
import { createAdministrateur, getAllAdministrateurs } from '../controllers/administrateurController';

router.post('/', createAdministrateur);
router.get('/', getAllAdministrateurs);

export default router;