// Importa as bibliotecas e funções necessárias
const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao'); // Ajuste o caminho para o arquivo do DAO

// Funções do livro-dao
const { obterLivros, incluir, excluir } = livroDao;

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
    try {
      const livros = await obterLivros();
      res.json(livros);
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao obter os livros' });
    }
  });

  // Rota POST para adicionar um novo livro
router.post('/', async (req, res) => {
    const novoLivro = req.body;
    try {
      await incluir(novoLivro);
      res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao incluir o livro' });
    }
  });

  // Rota DELETE para excluir um livro por ID
router.delete('/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
      await excluir(_id);
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao excluir o livro' });
    }
  });

  module.exports = router;