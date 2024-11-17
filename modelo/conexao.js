const mongoose = require("mongoose");
const options = { useUnifiedTopology: true, useNewUrlParser: true };

const banco = "mongodb://localhost:27017/livraria"; 

mongoose
  .connect(banco, options)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

module.exports = mongoose;
