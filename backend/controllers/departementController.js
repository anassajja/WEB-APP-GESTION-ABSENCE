import Departement from '../models/Departement.js'; // Import the Departement class

// Créer un département (Create a department)
export async function createDepartement(req, res) { // Handle POST requests to /api/departements
  try {
    const { nom } = req.body; // Destructure nom from request body

    // Create a new Departement instance using class-based encapsulation
    const newDepartement = new Departement(nom); // Use the constructor to create a new instance
    const model = Departement.getModel(); // Get the Mongoose model

    // Save the new Departement instance to the database
    await model.create({ // Use the model to create a new Departement document in the database
      nom: newDepartement.nom, // Set the nom field to the newDepartement nom property
    });

    res.status(201).json(newDepartement); // Respond with the new Departement document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Lister tous les départements (Get all departments)
export async function getAllDepartements(_req, res) { // Handle GET requests to /api/departements
  try {
    const model = Departement.getModel(); // Get the Mongoose model
    const departements = await model.find(); // Use the model to find all Departement documents

    res.status(200).json(departements); // Respond with all Departement documents
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors 
  }
}