import mongoose from "mongoose";

const { Schema, model } = mongoose;

const departementSchema = new Schema({
    nom: { type: String, required: true },
    dateCreation: { type: Date, default: Date.now },
});

class Departement {
    #nom;
    #dateCreation;

    constructor(nom) {
        this.#nom = nom;
        this.#dateCreation = Date.now();
    }

    static getModel() {
        return model("Departement", departementSchema);
    }

    getSafeProfile() {
        return {
            id: this._id,
            nom: this.#nom,
            dateCreation: this.#dateCreation,
        };
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get dateCreation() {
        return this.#dateCreation;
    }
}

export default Departement.getModel(); // Export the Mongoose model for the Departement schema