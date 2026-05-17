import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- ¡Súper importante para los enlaces!

@Component({
  selector: 'app-student-page',
  imports: [RouterLink], // <-- Debe estar aquí
  templateUrl: './student-page.html',
  styleUrl: './student-page.css'
})
export class StudentPage {

  // ¡Estos son los datos que tu HTML está intentando leer!
  readonly students = signal([
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María Gómez' },
    { id: 3, name: 'Carlos Rodríguez' },
    { id: 4, name: 'Ana Martínez' },
    { id: 5, name: 'Luis Fernández' }
  ]);

}
