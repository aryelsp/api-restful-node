import Usuario from '../models/Usuario.js';

// Listar todos
export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar
export const buscarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar
export const criarUsuario = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    if (!nome || !email || !idade) {
      return res
        .status(400)
        .json({ message: 'Campos obrigatórios: nome, email e idade.' });
    }
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar
export const atualizarUsuario = async (req, res) => {
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
    res.status(500).json({ message: error.message });
  }
};

// Deletar
export const deletarUsuario = async (req, res) => {
  try {
    const usuarioExcluido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioExcluido)
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    res.status(204).send({ message: 'Usuário excluído.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
