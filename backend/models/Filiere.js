import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const filiereSchema = new Schema({ // Define the schema for the Filiere model
    nom: { type : String, required : true },
    niveau: { type : String, required : true },
    responsable: { type : String, required : true },
    dateCreation: { type : Date, default : Date.now }
});

class Filiere { // Define the Filiere class with encaps
    #nom;
    #niveau;
    #responsable;
    #dateCreation;

    constructor(nom, niveau, responsable) { // Constructor with nom, niveau, and responsable parameters
        this.#nom = nom; 
        this.#niveau = niveau;
        this.#responsable = responsable;
        this.#dateCreation = Date.now();
    }

    static getModel() {
        return model('Filiere', filiereSchema);
    }

    getSafeProfile() { // Method to return a safe profile (no sensitive data)
        return { // Return an object with the safe profile data
            id: this._id, // Return the id field (Mongoose ObjectId)
            nom: this.#nom,
            niveau: this.#niveau,
            responsable: this.#responsable,
            dateCreation: this.#dateCreation
        };
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;  
    }

    get niveau() {       // Getter method for niveau
        return this.#niveau; // Return the niveau field
    }

    set niveau(value) {     // Setter method for niveau
        this.#niveau = value // Set the niveau field to the value parameter
    }

    get responsable() {   // Getter method for responsable
        return this.#responsable; // Return the responsable field
    }

    set responsable(value) {    // Setter method for responsable
        this.#responsable = value; // Set the responsable field to the value parameter
    }

    get dateCreation() {   // Getter method for dateCreation
        return this.#dateCreation; // Return the dateCreation field
    }

    displayFullName() {    // Method to display the full name
        return `${this.#nom}`; // Return the full name as a string
    }
}

export default Filiere.getModel(); // Export the Mongoose model wrapped with the class
