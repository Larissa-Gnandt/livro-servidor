const banco = require("./conexao"); // Importa o banco da conexão.js

// Define a estrutura do schema para a coleção 'livros'
const LivroSchema = new banco.Schema({
  _id: { type: String },
  titulo: {
    type: String,
    required: true, // Define como obrigatório
  },
  codEditora: {
    type: Number,
    required: true, // Define como obrigatório
  },
  resumo: String,
  autorres: [String], // Array de strings
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
