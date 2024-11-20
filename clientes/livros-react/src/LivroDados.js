import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import Livro from "./modelo/Livro";
import React from "react";
import "./LivroDados.css";

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = new Livro(
      "",
      codEditora,
      titulo,
      resumo,
      autores.split("\n")
    );

    controleLivro.incluir(novoLivro).then(() => {
      navigate("/");
    });
  };

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        {/* Campo Título */}
        <div className="mb-3 d-flex align-items-center">
          <label for="titulo" class="form-label me-3">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            class="form-control input-grande" id="titulo"
          />
        </div>

        {/* Campo Resumo */}
        <div className="mb-3 d-flex align-items-center">
          <label for="resumo" class="form-label me-3">Resumo</label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
            class="form-control input-grande" id="resumo" 
          />
        </div>

        {/* Campo Autores */}
        <div className="mb-3 d-flex align-items-center">
          <label for="autores" className="form-label me-3">Autores (separados por linha)</label>
          <textarea
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
            class="form-control input-grande" id="autores"
          />
        </div>

        {/* Combo de Editoras */}
        <div className="mb-3 d-flex align-items-center">
          <label for="editora" className="form-label me-3">Editora</label>
          <select className="form-select input-grande" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        {/* Botão de submissão */}
        <button type="submit">Incluir Livro</button>
      </form>
    </main>
  );
};

export default LivroDados;