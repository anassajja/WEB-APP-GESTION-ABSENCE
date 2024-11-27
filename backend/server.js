import express, { json } from 'express'; // Import express and json from express module
import { config } from 'dotenv'; // Import config function from dotenv module
import connectDB from './config/db'; // Import connectDB function from db module
import etudiantRoutes from './routes/etudiantRoutes'; // Import etudiantRoutes from etudiantRoutes module
import cors from 'cors'; // Import cors module

config(); // Load environment variables

const app = express(); // Create an express app
app.use(json()); // Middleware to parse JSON data
app.use(cors()); // Allow cross-origin requests

// Connexion à la base de données MongoDB
connectDB();

// Routes
app.use('/api/etudiants', etudiantRoutes); // Handle requests to /api/etudiants

const PORT = process.env.PORT || 5000; // Set the port to the environment variable PORT or 5000
app.listen(PORT, () => {    // Start the server on the specified port
  console.log(`Serveur lancé sur le port ${PORT}`); // Log a message to the console
});
