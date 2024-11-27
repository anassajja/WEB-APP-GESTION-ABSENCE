import { Router } from 'express'; // Import Router class from express module
const router = Router(); // Create a new router
import { createEtudiant, getAllEtudiants } from '../controllers/etudiantController'; // Import createEtudiant and getAllEtudiants functions from etudiantController

router.post('/', createEtudiant); // Handle POST requests to /api/etudiants
router.get('/', getAllEtudiants); // Handle GET requests to /api/etudiants

export default router; // Export the router
