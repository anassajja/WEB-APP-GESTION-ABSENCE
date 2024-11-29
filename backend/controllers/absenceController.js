import Absence from '../models/Absence.js'; // Import the Absence class from the Absence model

// Créer une absence (Create an absence)
export async function createAbsence(req, res) { // Handle POST requests to /api/absences/create
  try { // Handle any errors  
    if (req.user.role !== 'enseignant') { // Check if the user is an enseignant
      return res.status(403).json({ message: 'Forbidden: Only enseignant can create an absence' }); // Respond with an error message if the user is not an enseignant
    }

    const { etudiant, date, justification } = req.body; // Destructure etudiant, date, and justification from request body

    const newAbsence = new Absence({ etudiant, date, justification }); // Create a new Absence instance with the etudiant, date, and justification values
    const model = Absence.getModel(); // Get the Mongoose model

    await model.create(newAbsence); // Save the new absence to the database using the create method of the model

    res.status(201).json(newAbsence); // Respond with the new Absence document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Mettre à jour une absence (Update an absence)
export async function updateAbsence(req, res) { // Handle POST requests to /api/absences/update
  try {
    if (req.user.role !== 'enseignant') { // Check if the user is an enseignant
      return res.status(403).json({ message: 'Forbidden: Only enseignant can update an absence' }); // Respond with an error message if the user is not an enseignant
    }

    const { id } = req.params; // Destructure the id parameter from the request parameters
    const { etudiant, date, justification } = req.body; // Destructure etudiant, date, and justification from request body

    if (!mongoose.isValidObjectId(id)) { // Check if the id is a valid MongoDB ObjectId
      return res.status(400).json({ message: 'Invalid ID format' }); // Respond with an error message if the id is invalid
    }

    const model = Absence.getModel(); // Get the Mongoose model 
    const absence = await model.findById(id); // Use the model to find an Absence document by id

    if (!absence) { // Check if the absence is not found
      return res.status(404).json({ message: 'Absence not found' }); // Respond with an error message if the absence is not found
    }

    absence.etudiant = etudiant; // Update the etudiant field of the Absence document 
    absence.date = date; // Update the date field of the Absence document
    absence.justification = justification; // Update the justification field of the Absence document

    await absence.save(); // Save the updated Absence document to the database

    res.status(200).json(absence); // Respond with the updated Absence document 
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Supprimer une absence (Delete an absence) 
export async function deleteAbsence(req, res) { // Handle DELETE requests to /api/absences/delete/:id
  try {
    if (req.user.role !== 'enseignant') { // Check if the user is an enseignant
      return res.status(403).json({ message: 'Forbidden: Only enseignant can delete an absence' }); // Respond with an error message if the user is not an enseignant
    }

    const { id } = req.params; // Destructure the id parameter from the request parameters

    if (!mongoose.isValidObjectId(id)) { // Check if the id is a valid MongoDB ObjectId
      return res.status(400).json({ message: 'Invalid ID format' }); // Respond with an error message if the id is invalid
    }

    const model = Absence.getModel(); // Get the Mongoose model
    const absence = await model.findById(id); // Use the model to find an Absence document by id

    if (!absence) { // Check if the absence is not found
      return res.status(404).json({ message: 'Absence not found' }); // Respond with an error message if the absence is not found
    }

    await absence.remove(); // Remove the Absence document from the database

    res.status(200).json({ message: 'Absence deleted' }); // Respond with a success message
  } catch (err) {   // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors  
  }
}


// Lister toutes les absences (Get all absences)
export async function getAllAbsences(_req, res) { // Handle GET requests to /api/absences
  try {
    if (!['enseignant chef département', 'admin'].includes(_req.user.role)) { // Check if user is authorized
      return res.status(403).json({ message: 'Forbidden: Only enseignant chef département or admin can view all absences' }); // Respond with an error message if the user is not authorized
    }

    const model = Absence.getModel(); // Get the Mongoose model
    const absences = await model.find().populate('etudiant'); // Use the model to find all Absence documents and populate the etudiant field

    res.status(200).json(absences); // Respond with the Absence documents
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

// Récupérer une absence par ID (Get an absence by ID)
export async function getAbsenceById(req, res) { // Handle GET requests to /api/absences/:id
  try {
    if (!['enseignant chef département', 'admin'].includes(req.user.role)) { // Check if user is authorized
      return res.status(403).json({ message: 'Forbidden: Only enseignant chef département or admin can view an absence by ID' });
    }

    const { id } = req.params; // Destructure the id parameter from the request parameters

    if (!mongoose.isValidObjectId(id)) { // Check if the id is a valid MongoDB ObjectId
      return res.status(400).json({ message: 'Invalid ID format' }); // Respond with an error message if the id is invalid
    }

    const model = Absence.getModel(); // Get the Mongoose model
    const absence = await model.findById(id).populate('etudiant'); // Use the model to find an Absence document by id and populate the etudiant field

    if (!absence) { // Check if the absence is not found
      return res.status(404).json({ message: 'Absence not found' }); // Respond with an error message if the absence is not found
    }

    res.status(200).json(absence); // Respond with the Absence document
  } catch (err) { // Handle any errors
    res.status(500).json({ message: err.message }); // Handle any errors
  }
}

