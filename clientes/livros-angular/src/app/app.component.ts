import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'livros-angular';
}
