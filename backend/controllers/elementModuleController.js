import ElementModule from "../models/ElementModule";

export async function createElementModule(req, res) {
    try {
        const { nom, code, departement } = req.body;
    
        const newElementModule = new ElementModule(nom, code, departement);
        const model = ElementModule.getModel();
    
        await model.create({
        nom: newElementModule.nom,
        code: newElementModule.code,
        departement: newElementModule.departement,
        });
    
        res.status(201).json(newElementModule);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

export async function getAllElementModules(_req, res) {
    try {
        const model = ElementModule.getModel();
        const elementModules = await model.find().populate('departement');

        res.status(200).json(elementModules);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
