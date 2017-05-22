import mongoose from 'mongoose';
import db from '../../config/db';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

export default db.model('Fisker', userSchema);
