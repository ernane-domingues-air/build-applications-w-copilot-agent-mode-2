import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: String,
  focus: { type: String, required: [true, 'O foco é obrigatório'] },
  minutes: { type: Number, required: [true, 'A duração é obrigatória'] },
  difficulty: { type: String, required: [true, 'A dificuldade é obrigatória'] },
});

export const Workout = model('Workout', workoutSchema);
