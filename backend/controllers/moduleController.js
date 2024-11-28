import Module from "../models/Module";

export async function createModule(req, res) {
    try {
        const { nom, code, departement } = req.body;
    
        const newModule = new Module(nom, code, departement);
        const model = Module.getModel();
    
        await model.create({
        nom: newModule.nom,
        code: newModule.code,
        departement: newModule.departement,
        });
    
        res.status(201).json(newModule);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

export async function getAllModules(_req, res) {
    try {
        const model = Module.getModel();
        const modules = await model.find().populate('departement');

        res.status(200).json(modules);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
