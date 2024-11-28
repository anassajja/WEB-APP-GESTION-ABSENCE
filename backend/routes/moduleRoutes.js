import { Router } from 'express';
const router = Router();
import { createModule, getAllModules } from '../controllers/moduleController.js';

router.post('/', createModule);
router.get('/', getAllModules);

export default router;