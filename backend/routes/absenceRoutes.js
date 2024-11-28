import { Router } from 'express'; // Import Router class from express module
const router = Router(); // Create a new router
import { createAbsence, getAllAbsences } from '../controllers/absenceController.js'; // Import createAbsence and getAllAbsences functions from absenceController

// Define the POST and GET endpoints
router.post('/', createAbsence); // POST /api/absences -> creates a new absence
router.get('/', getAllAbsences); // GET /api/absences -> retrieves all absences

export default router; // Export the router