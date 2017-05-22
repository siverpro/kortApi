import mongoose from 'mongoose';
import db from '../../config/db';

const zoneSchema = mongoose.Schema({
  name: { type: String, required: true },
});

export default db.model('Zone', zoneSchema);
