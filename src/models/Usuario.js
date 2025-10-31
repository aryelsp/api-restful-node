import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: [true, 'nome é obrigatório'], trim: true },
    email: {
      type: String,
      required: [true, 'email é obrigatório'],
      unique: true,
      trim: true,
    },
    idade: { type: Number, required: [true, 'idade é obrigatório'] },
  },
  { timestamps: true }
);
