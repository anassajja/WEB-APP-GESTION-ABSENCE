import Absence from '../models/Absence.js'; // Import the Absence class from the Absence model

// Créer une absence (Create an absence)
export async function createAbsence(req, res) { // Handle POST requests to /api/absences
  try {
    const { etudiant, date, justification } = req.body; // Destructure etudiant, date, and justification from request body

    // Create a new Absence instance using class-based encapsulation
    const newAbsence = new Absence(etudiant, date, justification); // Use the constructor to create a new instance
    const model = Absence.getModel(); // Get the Mongoose model

    // Save the new Absence instance to the database
    await model.create({ // Use the model to create a new Absence document in the database
      etudiant: newAbsence.etudiant, // Set the etudiant field to the newAbsence etudiant property
      date: newAbsence.date, // Set the date field to the newAbsence date property 
      justification: newAbsence.justification, // Set the justification field to the newAbsence justification property
    });

    res.status(201).json(newAbsence); // Respond with the new Absence document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Lister toutes les absences (Get all absences)
export async function getAllAbsences(_req, res) { // Handle GET requests to /api/absences
  try {
    const model = Absence.getModel(); // Get the Mongoose model
    const absences = await model.find().populate('etudiant'); // Use the model to find all Absence documents and populate the etudiant field

    res.status(200).json(absences); // Respond with all Absence documents
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors 
  }
}