import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- ¡Claves para que funcione el menú!
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe], // <-- Deben estar declarados aquí
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeaderComponent {
  readonly brand = signal('PPW Angular');
}
