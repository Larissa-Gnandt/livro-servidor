import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados'; // Importa o LivroDados
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa o Router e suas ferramentas

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navegação */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Biblioteca
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Links usando o componente <Link> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/livro-dados">
                  Novo
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/livro-dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

