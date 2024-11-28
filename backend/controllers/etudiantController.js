import Etudiant from '../models/Etudiant'; // Import Etudiant model

// Créer un étudiant (Create a student)
export async function createEtudiant(req, res) { // Handle POST requests to /api/etudiants
  try {
    const { nom, prenom, email, filiere } = req.body; // Destructure nom, prenom, email, and filiere from request body

    // Create a new Etudiant instance using class-based encapsulation
    const newEtudiant = new Etudiant(nom, prenom, email, filiere); // Use the constructor to create a new instance
    const model = Etudiant.getModel(); // Get the Mongoose model

    // Save the new Etudiant instance to the database
    await model.create({ // Use the model to create a new Etudiant document in the database
      nom: newEtudiant.nom, // Set the nom field to the newEtudiant nom property
      prenom: newEtudiant.prenom, // Set the prenom field to the newEtudiant prenom property 
      email: newEtudiant.email, // Set the email field to the newEtudiant email property
      filiere: newEtudiant.filiere, // Set the filiere field to the newEtudiant filiere property
    });

    res.status(201).json(newEtudiant); // Respond with the new Etudiant document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Lister tous les étudiants (Get all students)
export async function getAllEtudiants(_req, res) { // Handle GET requests to /api/etudiants
  try {
    const model = Etudiant.getModel(); // Get the Mongoose model
    const etudiants = await model.find().populate('filiere'); // Use the model to find all Etudiant documents and populate the filiere field

    res.status(200).json(etudiants); // Respond with all Etudiant documents
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors 
  }
}
