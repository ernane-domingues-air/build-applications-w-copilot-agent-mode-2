import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: [true, 'O nome é obrigatório'] },
  email: { type: String, required: [true, 'O e-mail é obrigatório'] },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  fitnessGoal: { type: String, required: [true, 'A meta de atividade física é obrigatória'] },
});

export const User = model('User', userSchema);
