import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Globo Livros' },
    { codEditora: 2, nome: 'Bertrand Brasil' },
    { codEditora: 3, nome: 'HarperCollins' },
    { codEditora: 4, nome: 'Outra' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editorasFiltradas = this.editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return editorasFiltradas.length > 0 ? editorasFiltradas[0].nome : undefined;
  }
}
