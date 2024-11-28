import mongoose from "mongoose";

const { Schema, model } = mongoose;

const moduleSchema = new Schema({
    nom: { type: String, required: true },
    code: { type: String, required: true },
    elements: [{ type: Schema.Types.ObjectId, ref: "ElementModule" }],
});

class Module {
    #nom;
    #code;
    #elements;

    constructor(nom, code, elements) {
        this.#nom = nom;
        this.#code = code;
        this.#elements = elements;
    }

    static getModel() {
        return model("Module", moduleSchema);
    }

    getSafeProfile() {
        return {
            id: this._id,
            nom: this.#nom,
            code: this.#code,
            elements: this.#elements,
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

    get elements() {
        return this.#elements;
    }

    set elements(value) {
        this.#elements = value;
    }
}

export default Module.getModel(); // Export the Mongoose model for the Module schema