const mongoose = require("mongoose");
const options = { useUnifiedTopology: true, useNewUrlParser: true };

const banco = "mongodb://localhost:27017/livraria"; 

mongoose
  .connect(banco, options)
  .then(() => {
       return "Conexão com o MongoDB realizada com sucesso"
  })
  .catch((error) => {
    throw new Error(`Erro ao conectar ao MongoDB: ${error.message}`);
  });

module.exports = mongoose;
