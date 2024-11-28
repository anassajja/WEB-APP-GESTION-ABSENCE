import { Router } from 'express';
const router = Router();    
import { createElementModule, getAllElementModules } from '../controllers/elementModuleController.js';

router.post('/', createElementModule);
router.get('/', getAllElementModules);

export default router;