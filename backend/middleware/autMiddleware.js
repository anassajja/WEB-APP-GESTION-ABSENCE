import { verify } from 'jsonwebtoken'; // Permet de vérifier le token
import { config } from 'dotenv'; // Permet de charger les variables d'environnement

config(); // Charge les variables d'environnement

const authMiddleware = (req, res, next) => { // Middleware pour vérifier le token
  const token = req.header('x-auth-token'); // Récupère le token du header
  if (!token) return res.status(401).json({ msg: 'Accès refusé, pas de token' }); // Si pas de token, renvoie une erreur

  try { // Essaye de vérifier le token
    const decoded = verify(token, process.env.JWT_SECRET); // Vérifie le token avec la clé secrète JWT
    req.user = decoded.user; // Stocke l'utilisateur dans la requête  (req)
    next(); // Passe au prochain middleware
  } catch (err) { // Si une erreur survient
    res.status(401).json({ msg: 'Token invalide' }); // Renvoie une erreur
  }
};

export default authMiddleware; // Exporte le middleware pour utilisation dans d'autres fichiers
