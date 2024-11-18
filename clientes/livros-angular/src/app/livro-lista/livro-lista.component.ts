import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css',
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((livros) => {
      this.livros = livros;
    });
  }

  excluir = (codigo: string): void => {
    this.servLivros
      .excluir(codigo)
      .then(() => {
        return this.servLivros.obterLivros();
      })
      .then((livros) => {
        this.livros = livros;
      });
  };

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
