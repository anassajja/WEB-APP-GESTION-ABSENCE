import ChefDepartement from '../models/chefDepartementModel.js';

// Créer un chef de département (Create a department head)
export async function createChefDepartement(req, res) { // Handle POST requests to /api/chefDepartements
  try {
    const { nom, prenom, email, departement } = req.body; // Destructure nom, prenom, email, and departement from request body

    // Create a new ChefDepartement instance using class-based encapsulation
    const newChefDepartement = new ChefDepartement(nom, prenom, email, departement); // Use the constructor to create a new instance
    const model = ChefDepartement.getModel(); // Get the Mongoose model

    // Save the new ChefDepartement instance to the database
    await model.create({ // Use the model to create a new ChefDepartement document in the database
      nom: newChefDepartement.nom, // Set the nom field to the newChefDepartement nom property
      prenom: newChefDepartement.prenom, // Set the prenom field to the newChefDepartement prenom property 
      email: newChefDepartement.email, // Set the email field to the newChefDepartement email property
      departement: newChefDepartement.departement, // Set the departement field to the newChefDepartement departement property
    });

    res.status(201).json(newChefDepartement); // Respond with the new ChefDepartement document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Lister tous les chefs de département (Get all department heads)
export async function getAllChefDepartements(_req, res) { // Handle GET requests to /api/chefDepartements
  try {
    const model = ChefDepartement.getModel(); // Get the Mongoose model
    const chefDepartements = await model.find().populate('departement'); // Use the model to find all ChefDepartement documents and populate the departement field

    res.status(200).json(chefDepartements); // Respond with all ChefDepartement documents
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors 
  }
}