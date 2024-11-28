import { Router } from 'express';
const router = Router();
import { createModule, getAllModules } from '../controllers/moduleController';

router.post('/', createModule);
router.get('/', getAllModules);

export default router;