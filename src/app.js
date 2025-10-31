import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { errorHandler } from '../middlewares/errorHandler.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch((error) => console.error(`Falha na conexao: ${error}`));

// Rotas
app.use('/usuarios', usuarioRoutes);

app.use(errorHandler);

export default app;
