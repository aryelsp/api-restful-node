import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import usuarioRoutes from './routes/usuarioRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Conexão com MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
  }
};
connectDB();

// Rotas
app.use('/usuarios', usuarioRoutes);

export default app;
