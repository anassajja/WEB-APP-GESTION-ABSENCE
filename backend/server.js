import express, { json } from 'express'; // Import express and json from express module
import { config } from 'dotenv'; // Import config function from dotenv module
import connectDB from './config/db'; // Import connectDB function from db module
import etudiantRoutes from './routes/etudiantRoutes'; // Import etudiantRoutes from etudiantRoutes module
import enseignantRoutes from './routes/enseignantRoutes'; // Import enseignantRoutes from enseignantRoutes module
import absenceRoutes from './routes/absenceRoutes'; // Import absenceRoutes from absenceRoutes module
import filiereRoutes from './routes/filiereRoutes'; // Import filiereRoutes from filiereRoutes module
import departementRoutes from './routes/departementRoutes'; // Import departementRoutes from departementRoutes module
import userRoutes from './routes/userRoutes'; // Import userRoutes from userRoutes module
import moduleRoutes from './routes/moduleRoutes'; // Import moduleRoutes from moduleRoutes module
import elementModuleRoutes from './routes/elementModuleRoutes'; // Import elementModuleRoutes from elementModuleRoutes module
import administrateurRoutes from './routes/administrateurRoutes'; // Import adminRoutes from adminRoutes module
import cors from 'cors'; // Import cors module to allow cross-origin requests from the frontend
import authMiddleware from './middleware/autMiddleware';
import adminMiddleware from './middleware/adminMiddleware';

config(); // Load environment variables
 
const app = express(); // Create an express app
app.use(json()); // Middleware to parse JSON data 
app.use(cors()); // Allow cross-origin requests

// Connexion à la base de données MongoDB
connectDB();

// Routes
app.use('/api/etudiants', authMiddleware, adminMiddleware, etudiantRoutes); // Handle requests to /api/etudiants with etudiantRoutes middleware 
app.use('/api/enseignants', authMiddleware, adminMiddleware, enseignantRoutes); // Handle requests to /api/enseignants with etudiantRoutes middleware
app.use('/api/absences', authMiddleware, absenceRoutes); // Handle requests to /api/absences with absenceRoutes middleware
app.use('/api/filieres', authMiddleware, adminMiddleware, filiereRoutes); // Handle requests to /api/filieres with filiereRoutes middleware
app.use('api/departements', authMiddleware, adminMiddleware, departementRoutes); // Handle requests to /api/departements with departementRoutes middleware
app.use('/api/users', authMiddleware, userRoutes); // Handle requests to /api/users with userRoutes middleware
app.use('/api/modules', authMiddleware, adminMiddleware, moduleRoutes); // Handle requests to /api/modules with moduleRoutes middleware
app.use('/api/elementsModules', authMiddleware, adminMiddleware, elementModuleRoutes); // Handle requests to /api/elementsModules with elementModuleRoutes middleware
app.use('/api/admins', authMiddleware, adminMiddleware, administrateurRoutes); // Handle requests to /api/admins with adminRoutes middleware



const PORT = process.env.PORT || 5000; // Set the port to the environment variable PORT or 5000
app.listen(PORT, () => {    // Start the server on the specified port
  console.log(`Serveur lancé sur le port ${PORT}`); // Log a message to the console
});
