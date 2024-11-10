// Importa a conexão do banco de dados (mongoose)
const banco = require("./conexao"); // Importa o mongoose da conexão.js

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

// Cria o modelo 'Livro' baseado no LivroSchema
module.exports = banco.model("Livro", LivroSchema, "livros");
