import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleLivrosService } from './controle-livros.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    BrowserModule,
    LivroListaComponent,
    LivroDadosComponent,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  providers: [ControleEditoraService, ControleLivrosService],
})
export class AppModule {}
