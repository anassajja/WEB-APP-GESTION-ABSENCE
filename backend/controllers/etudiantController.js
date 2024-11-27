import Etudiant, { find } from '../models/Etudiant'; // Import Etudiant model

// Créer un étudiant
export async function createEtudiant(req, res) { // Handle POST requests to /api/etudiants
  try { // Try to create a new Etudiant document
    const { nom, prenom, email, filiere } = req.body; // Destructure nom, prenom, email, and filiere from request body
    const newEtudiant = new Etudiant({ nom, prenom, email, filiere }); // Create a new Etudiant document
    await newEtudiant.save(); // Save the new Etudiant document
    res.status(201).json(newEtudiant); // Respond with the new Etudiant document
  } catch (err) { // Catch any errors that occur
    res.status(500).json({ message: err.message }); // Respond with a 500 status code and the error
  }
}

// Lister tous les étudiants
export async function getAllEtudiants(_req, res) { // Handle GET requests to /api/etudiants
  try { // Try to find all Etudiant documents
    const etudiants = await find().populate('filiere'); // Find all Etudiant documents and populate the filiere field
    res.status(200).json(etudiants); // Respond with the Etudiant documents
  } catch (err) {  // Catch any errors that occur
    res.status(500).json({ message: err.message }); // Respond with a 500 status code and the error
  }
}
