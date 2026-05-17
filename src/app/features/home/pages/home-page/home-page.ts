import { ChangeDetectionStrategy, Component, inject } from '@angular/core'; // <-- Agrega inject aquí
import { Router } from '@angular/router';
import { Hero } from '../../../../components/hero/hero'; // Mantén tu ruta correcta

@Component({
  selector: 'app-home-page',
  imports: [Hero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  // Forma moderna que pide la práctica:
  private router = inject(Router);

goToStudentsPage(): void {
    console.log("¡El clic llegó al TypeScript!");

    // El .then nos dirá si la navegación fue un éxito (true) o si rebotó (false)
    this.router.navigate(['/students']).then(exito => {
      console.log("¿La navegación fue exitosa?", exito);
    });
  }
}
