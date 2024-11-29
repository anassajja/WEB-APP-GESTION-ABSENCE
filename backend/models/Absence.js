import mongoose from "mongoose";

const { Schema, model } = mongoose;

const absenceSchema = new Schema({ // Define the Absence schema using the Schema class from Mongoose 
    etudiant: { type: Schema.Types.ObjectId, ref: "Etudiant" }, // Reference the Etudiant model by ObjectId 
    dateAbsence: { type: Date, default: Date.now },
    justification: { type: String, required: true },
});

class Absence {
    #etudiant;
    #dateAbsence;
    #justification;

    constructor(etudiant, justification) {
        this.#etudiant = etudiant;
        this.#justification = justification;
        this.#dateAbsence = Date.now();
    }

    static getModel() {
        return model("Absence", absenceSchema);
    }

    getSafeProfile() { // Return a safe profile of the Absence document without sensitive information
        return {
            id: this._id, // Mapping MongoDB's _id to id for clarity
            etudiant: this.#etudiant,
            dateAbsence: this.#dateAbsence,
            justification: this.#justification,
        };
    }

    get etudiant() {
        return this.#etudiant;
    }

    set etudiant(value) {
        this.#etudiant = value;
    }

    get justification() {
        return this.#justification;
    }

    set justification(value) {
        this.#justification = value;
    }
}

export default Absence.getModel(); // Export the Mongoose model for the Absence schema
