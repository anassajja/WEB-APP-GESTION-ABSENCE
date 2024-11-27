const adminMiddleware = (req, res, next) => { // Middleware pour vérifier si l'utilisateur est un admin
    if (req.user.role !== 'admin') { // Si l'utilisateur n'est pas un admin
      return res.status(403).json({ msg: 'Accès interdit' }); // Renvoie une erreur
    }
    next(); // Passe au prochain middleware
  };
  
  export default adminMiddleware; // Exporte le middleware pour utilisation dans d'autres fichiers
  