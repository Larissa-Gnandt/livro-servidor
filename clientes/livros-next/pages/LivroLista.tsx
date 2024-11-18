import { useState, useEffect } from "react";
import Head from "next/head";
import Menu from "../componentes/Menu";
import LinhaLivro from "../componentes/LinhaLivro";
import styles from "../src/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ControleLivro from "../classes/controle/ControleLivros";

const controleLivros = new ControleLivro();

interface Livro {
  codigo: string; 
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    const carregarLivros = async () => {
      const dados = await controleLivros.obterLivros();
      setLivros(dados);
      setCarregado(true);
    };
    if (!carregado) carregarLivros();
  }, [carregado]);

  const excluir = (codigo: string) => {
    controleLivros
      .excluir(codigo)
      .then(() => {
        setCarregado(false); 
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
        <meta name="description" content="Visualização e exclusão de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div
        style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
      >
        <main className={styles.main}>
          <h1>Catálogo de Livros</h1>
          <table>
            <thead
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "100px",
              }}
            >
              <tr style={{ fontSize: "20px" }}>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro, index) => (
                <LinhaLivro
                  key={index} 
                  livro={livro}
                  excluir={() => excluir(livro.codigo)} 
                />
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default LivroLista;
