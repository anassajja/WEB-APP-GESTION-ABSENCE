import { Router } from 'express'; // Import Router class from express module
const router = Router(); // Create a new router
import { createEtudiant, getAllEtudiants } from '../controllers/etudiantController.js'; // Import createEtudiant and getAllEtudiants functions from etudiantController

// Define the POST and GET endpoints
router.post('/', createEtudiant); // POST /api/etudiants -> creates a new etudiant
router.get('/', getAllEtudiants); // GET /api/etudiants -> retrieves all etudiants

export default router; // Export the router
