import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  name: { type: String, required: [true, 'O nome é obrigatório'] },
  mascot: { type: String, required: [true, 'O mascote é obrigatório'] },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const Team = model('Team', teamSchema);
