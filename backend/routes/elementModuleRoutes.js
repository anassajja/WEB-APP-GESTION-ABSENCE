import { Router } from 'express';
const router = Router();    
import { createElementModule, getAllElementModules } from '../controllers/elementModuleController';

router.post('/', createElementModule);
router.get('/', getAllElementModules);

export default router;