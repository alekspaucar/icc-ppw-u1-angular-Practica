import { Component, inject, signal } from '@angular/core'; // <-- Asegúrate de importar signal
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';
import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';
// NUEVAS IMPORTACIONES
import { AuthService } from '../../../../core/services/auth.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPageComponent {
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);

  // INYECTAMOS LOS NUEVOS SERVICIOS
  authService = inject(AuthService); // IMPORTANTE: no ponerle "private" para poder usarlo en el HTML
  private favoritesService = inject(FavoritesService);

  private characterId = Number(this.route.snapshot.paramMap.get('id'));

  // NUEVO SIGNAL PARA EL ESTADO DEL BOTÓN
  isFavorite = signal(false);

  characterResource = rxResource({
    stream: () => {
      const cached = this.cacheService.getById(this.characterId);
      if (cached) return of(cached);

      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        tap((character) => this.cacheService.save(character))
      );
    },
  });

  // NUEVA FUNCIÓN PARA EL BOTÓN
  toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return; // Si no hay sesión, no hace nada

    if (this.isFavorite()) {
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}
