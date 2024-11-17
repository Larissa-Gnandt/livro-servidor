const banco = require("./conexao");

const LivroSchema = new banco.Schema({
  titulo: {
    type: String,
    required: true, 
  },
  codEditora: {
    type: Number,
    required: true, 
  },
  resumo: String,
  autorres: [String],
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
