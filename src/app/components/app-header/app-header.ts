import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- 1. Lo volvemos a importar aquí

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive], // <-- 2. Lo agregamos al arreglo
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeaderComponent {
  readonly brand = signal('PPW Angular');
}
