import { Schema, model } from 'mongoose';

const filiereSchema = new Schema({
  nom: String,
  departement: { type: Schema.Types.ObjectId, ref: 'Departement' }
});

export default model('Filiere', filiereSchema);
