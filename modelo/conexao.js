const mongoose = require("mongoose");
const options = { useUnifiedTopology: true, useNewUrlParser: true };

// URL do MongoDB
const banco = "mongodb://localhost:27017/nomeDoBanco"; // substitua "nomeDoBanco" pelo nome do seu banco

// Efetua a conexão com o MongoDB
mongoose
  .connect(banco, options)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Exporta o mongoose para uso em outros arquivos
module.exports = mongoose;
