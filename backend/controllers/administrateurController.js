import Administarteur from '../models/Administrateur.js'; // Import the model

export async function createAdministrateur(req, res) {
  try {
    const { nom, prenom, email, password } = req.body;
    const newAdministrateur = new Administarteur(nom, prenom, email, password);
    const model = Administarteur.getModel();
    await model.create({
      nom: newAdministrateur.nom,
      prenom: newAdministrateur.prenom,
      email: newAdministrateur.email,
      password: newAdministrateur.password,
    });

    res.status(201).json(newAdministrateur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getAllAdministrateurs(_req, res) {
  try {
    const model = Administarteur.getModel();
    const administrateurs = await model.find();

    res.status(200).json(administrateurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}