import { Schema, model } from 'mongoose'; // Import mongoose module

const etudiantSchema = new Schema({ // Create a new schema for Etudiant model 
  nom: String, // Define a field for nom
  prenom: String, // Define a field for prenom
  email: { type: String, required: true, unique: true }, // Define a field for email
  filiere: { type: Schema.Types.ObjectId, ref: 'Filiere' }, // Define a field for filiere
  dateInscription: { type: Date, default: Date.now } // Define a field for dateInscription
});

export default model('Etudiant', etudiantSchema); // Export Etudiant model
