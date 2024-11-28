import mongoose from "mongoose";

const { Schema, model } = mongoose;

const elementModuleSchema = new Schema({
    nom: { type: String, required: true },
    code: { type: String, required: true },
    coefficient: { type: Number, required: true },
});

class ElementModule {
    #nom;
    #code;
    #coefficient;

    constructor(nom, code, coefficient) {
        this.#nom = nom;
        this.#code = code;
        this.#coefficient = coefficient;
    }

    static getModel() {
        return model("ElementModule", elementModuleSchema);
    }

    getSafeProfile() {
        return {
            id: this._id,
            nom: this.#nom,
            code: this.#code,
            coefficient: this.#coefficient,
        };
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get code() {
        return this.#code;
    }

    set code(value) {
        this.#code = value;
    }

    get coefficient() {
        return this.#coefficient;
    }

    set coefficient(value) {
        this.#coefficient = value;
    }
}

export default ElementModule.getModel(); // Export the Mongoose model for the ElementModule schema