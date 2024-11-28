import Enseignant from '../models/enseignantModel.js';

export async function createEnseignant(req, res) {
    try {
        const { nom, prenom, email, grade } = req.body;
    
        const newEnseignant = new Enseignant(nom, prenom, email, grade);
        const model = Enseignant.getModel();
    
        await model.create({
        nom: newEnseignant.nom,
        prenom: newEnseignant.prenom,
        email: newEnseignant.email,
        grade: newEnseignant.grade,
        });
    
        res.status(201).json(newEnseignant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

export async function getAllEnseignants(_req, res) {
    try {
        const model = Enseignant.getModel();
        const enseignants = await model.find().populate('grade');
    
        res.status(200).json(enseignants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }