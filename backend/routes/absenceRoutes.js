import { Router } from 'express';  // Import Router from express
import { createAbsence, updateAbsence, deleteAbsence, getAllAbsences, getAbsenceById } from '../controllers/absenceController.js';  // Import controller functions
import { authMiddleware, roleCheckMiddleware } from '../middleware/authMiddleware.js';  // Import middleware functions

const router = Router();  // Create a new router

// Route for creating absence (only accessible to 'enseignant' role)
router.post('/api/absences/create', authMiddleware, roleCheckMiddleware(['enseignant']), createAbsence);

// Route for updating absence (only accessible to 'enseignant' role)
router.put('/api/absences/update/:id', authMiddleware, roleCheckMiddleware(['enseignant']), updateAbsence);

// Route for deleting absence (only accessible to 'enseignant' role)
router.delete('/api/absences/delete/:id', authMiddleware, roleCheckMiddleware(['enseignant']), deleteAbsence);

// Route for getting all absences (accessible to 'chef-departement', 'admin', or 'enseignant')
router.get('/api/absences', authMiddleware, roleCheckMiddleware(['chef-departement', 'admin', 'enseignant']), getAllAbsences);

// Route for getting absence by ID (accessible to 'chef-departement', 'admin', or 'enseignant')
router.get('/api/absences/:id', authMiddleware, roleCheckMiddleware(['chef-departement', 'admin', 'enseignant']), getAbsenceById);

export default router;  // Export the router to be used in the main app
