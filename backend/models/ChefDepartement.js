import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chefDepartementSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateInscription: { type: Date, default: Date.now },
});

class ChefDepartement {
    #nom;
    #prenom;
    #email;
    #dateInscription;

    constructor(nom, prenom, email) {
        this.#nom = nom;
        this.#prenom = prenom;
        this.#email = email;
        this.#dateInscription = Date.now();
    }

    static getModel() {
        return model("ChefDepartement", chefDepartementSchema);
    }

    getSafeProfile() {
        return {
            id: this._id,
            nom: this.#nom,
            prenom: this.#prenom,
            email: this.#email,
            dateInscription: this.#dateInscription,
        };
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get prenom() {
        return this.#prenom;
    }

    set prenom(value) {
        this.#prenom = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get dateInscription() {
        return this.#dateInscription;
    }

    displayFullName() {
        return `${this.#nom} ${this.#prenom}`;
    }
}

export default ChefDepartement.getModel();