import Usuario from '../models/Usuario.js';

// Listar todos
export const listarUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
};

// Buscar
export const buscarUsuario = async (req, res, next) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

// Criar
export const criarUsuario = async (req, res, next) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    next(error);
  }
};

// Atualizar
export const atualizarUsuario = async (req, res, next) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!usuarioAtualizado)
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    next(error);
  }
};

// Deletar
export const deletarUsuario = async (req, res, next) => {
  try {
    const usuarioExcluido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioExcluido)
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
