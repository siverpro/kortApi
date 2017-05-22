import mongoose from 'mongoose';
import db from '../../config/db';

const fangstSchema = mongoose.Schema({
  name: { type: String, required: true },
  fisher: { type: String, required: true },
  date: { type: Date, required: true },
});

export default db.model('Fangst', fangstSchema);
