const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao'); 

const { obterLivros, incluir, excluir } = livroDao;

router.get('/', async (res) => {
    try {
      const livros = await obterLivros();
      res.json(livros);
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao obter os livros' });
    }
  });

router.post('/', async (req, res) => {
    const novoLivro = req.body;
    try {
      await incluir(novoLivro);
      res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao incluir o livro' });
    }
  });

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