const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    // Utiliza o método find para buscar todos os livros
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error("Erro ao obter livros:", error);
    throw error;
  }
};

const incluir = async (livro) => {
  try {
    // Utiliza o método create para incluir o novo livro no banco de dados
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    console.error("Erro ao incluir livro:", error);
    throw error;
  }
};

const excluir = async (codigo) => {
  try {
    // Utiliza o método deleteOne para excluir o livro com o _id correspondente
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
    throw error;
  }
};

module.exports = { obterLivros, incluir, excluir };
