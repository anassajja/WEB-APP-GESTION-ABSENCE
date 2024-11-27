import { connect } from 'mongoose'; // Importer le module mongoose
import { config } from 'dotenv'; // Importer le module dotenv

config(); // Charger les variables d'environnement

const connectDB = async () => { // Fonction pour se connecter à la base de données
  try { // Essayer de se connecter à la base de données
    await connect(process.env.MONGODB_URI, { // Se connecter à la base de données MongoDB
      useNewUrlParser: true, // Utiliser le nouveau moteur de connexion
      useUnifiedTopology: true, // Utiliser le nouveau moteur de découverte et de surveillance
    });
    console.log('MongoDB connected'); // Afficher un message de succès si la connexion réussit
  } catch (err) { // Attraper les erreurs qui se produisent
    console.error(err.message); // Afficher l'erreur
    process.exit(1);  // Quitter l'application si la connexion échoue
  }
};

export default connectDB; // Exporter la fonction pour utilisation dans d'autres fichiers
