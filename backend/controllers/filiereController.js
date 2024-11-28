import Filiere from '../models/Filiere.js'; // Import the Filiere model

export async function createFiliere(req, res) {
    try {
        const { nom } = req.body;

        const newFiliere = new Filiere(nom);
        const model = Filiere.getModel();

        await model.create({
        nom: newFiliere.nom,
        });
    
        res.status(201).json(newFiliere);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getAllFilieres(_req, res) {
    try {
        const model = Filiere.getModel();
        const filieres = await model.find();

        res.status(200).json(filieres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}