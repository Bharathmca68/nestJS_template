import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Education: { type: String, required: true },
});
