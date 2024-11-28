import mongoose from 'mongoose'; // Import mongoose for schema creation

const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

// Define the schema for the Etudiant model
const etudiantSchema = new Schema({ // Create a new schema for the Etudiant model
  nom: { type: String, required: true },  // Define the nom field as a required string
  prenom: { type: String, required: true }, // Define the prenom field as a required
  email: { type: String, required: true, unique: true }, // Define the email field as a required unique string
  filiere: { type: Schema.Types.ObjectId, ref: 'Filiere' }, // Define the filiere field as a reference to the Filiere model
  dateInscription: { type: Date, default: Date.now }, // Define the dateInscription field as a Date with a default value of the current date
});

// Define the Etudiant class with encapsulation using private fields (ES2024)
class Etudiant {
  #nom;          // Private field
  #prenom;       // Private field
  #email;        // Private field
  #filiere;      // Private field
  #dateInscription; // Private field

  constructor(nom, prenom, email, filiere) { // Constructor with nom, prenom, email, and filiere parameters
    this.#nom = nom; // Set the nom field to the nom parameter
    this.#prenom = prenom; // Set the prenom field to the prenom parameter
    this.#email = email; // Set the email field to the email parameter
    this.#filiere = filiere; // Set the filiere field to the filiere parameter
    this.#dateInscription = Date.now(); // Set the dateInscription field to the current date
  }

  // Static method to get the Mongoose model
  static getModel() { // Static method to return the Mongoose model
    return model('Etudiant', etudiantSchema); // Return the Mongoose model for the Etudiant schema
  } // End of getModel method
 
  // Encapsulated method to return a safe profile (no sensitive data) 
  getSafeProfile() { // Method to return a safe profile (no sensitive data)
    return { // Return an object with the safe profile data
      id: this._id, // Return the id field (Mongoose ObjectId)
      nom: this.#nom, // Return the nom field
      prenom: this.#prenom, // Return the prenom field 
      email: this.#email, // Return the email field
      filiere: this.#filiere, // Return the filiere field
      dateInscription: this.#dateInscription, // Return the dateInscription field
    };
  }

  // Getter method for nom
  get nom() { // Getter method for nom
    return this.#nom; // Return the nom field
  }

  // Setter method for nom
  set nom(value) { // Setter method for nom
    this.#nom = value; // Set the nom field to the value parameter
  }

  // Getter method for prenom
  get prenom() { // Getter method for prenom
    return this.#prenom; // Return the prenom field
  }

  // Setter method for prenom
  set prenom(value) { // Setter method for prenom
    this.#prenom = value; // Set the prenom field to the value parameter
  }

  // Getter method for email
  get email() { // Getter method for email
    return this.#email; // Return the email field
  }

  // Setter method for email
  set email(value) { // Setter method for email
    this.#email = value; // Set the email field to the value parameter
  }

  // Getter method for filiere
  get filiere() { // Getter method for filiere
    return this.#filiere; // Return the filiere field
  }

  // Setter method for filiere
  set filiere(value) { // Setter method for filiere
    this.#filiere = value; // Set the filiere field to the value parameter
  }

  // Getter method for dateInscription
  get dateInscription() { // Getter method for dateInscription
    return this.#dateInscription; // Return the dateInscription field
  }

  // Method to display full name
  displayFullName() {   // Method to display the full name
    return `${this.#nom} ${this.#prenom}`; // Return the full name as a string
  }
}

// Export the Mongoose model wrapped with the class
export default Etudiant.getModel();
