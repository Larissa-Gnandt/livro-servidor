import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro('', 0, '', '', []);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  };
}
