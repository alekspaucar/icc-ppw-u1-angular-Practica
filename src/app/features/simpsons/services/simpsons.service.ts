import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// Agregamos delay, map y timeout a las importaciones de rxjs
import { Observable, catchError, delay, map, tap, throwError, timeout } from 'rxjs';
import { SimpsonsCharacter, SimpsonsResponse } from '../models/simpsons.interface';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://thesimpsonsapi.com/api';

  // Método 1: Traer la lista (Ya lo tenías)
  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}`)
      .pipe(
        tap((response) => console.log('Simpsons API response:', response)),
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  // Método 2: Traer un solo personaje por ID (NUEVO)
  getCharacterById(id: number): Observable<SimpsonsCharacter> {
    return this.http
      .get<SimpsonsCharacter>(`${this.baseUrl}/characters/${id}`)
      .pipe(
        delay(300), // Simula un poco de latencia para ver el spinner
        timeout(5000), // Corta la petición si tarda más de 5 segundos
        tap((character) => console.log('Character loaded:', character.name)),
        map((character) => ({
          ...character,
          // Normaliza el texto si viene vacío desde la API
          occupation: character.occupation || 'Sin ocupacion registrada',
        })),
        catchError(() => throwError(() => new Error('No se pudo cargar el personaje')))
      );
  }
}
