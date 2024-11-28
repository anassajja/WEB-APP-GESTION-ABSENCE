import express, { json } from 'express'; // Import express and json from express module
import { config } from 'dotenv'; // Import config function from dotenv module
import connectDB from './config/db'; // Import connectDB function from db module
import etudiantRoutes from './routes/etudiantRoutes'; // Import etudiantRoutes from etudiantRoutes module
import cors from 'cors'; // Import cors module to allow cross-origin requests from the frontend
import authMiddleware from './middleware/autMiddleware';

config(); // Load environment variables
 
const app = express(); // Create an express app
app.use(json()); // Middleware to parse JSON data 
app.use(cors()); // Allow cross-origin requests

// Connexion à la base de données MongoDB
connectDB();

// Routes
// Use the authMiddleware for routes that require authentication
app.use('/api/etudiants', authMiddleware, etudiantRoutes); // Handle requests to /api/etudiants with the etudiantRoutes and authMiddleware middleware functions 

const PORT = process.env.PORT || 5000; // Set the port to the environment variable PORT or 5000
app.listen(PORT, () => {    // Start the server on the specified port
  console.log(`Serveur lancé sur le port ${PORT}`); // Log a message to the console
});
