import { Injectable, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);

  currentUser = toSignal(authState(this.auth));

  login(email: string, password: string) {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
    );
  }

  register(email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    );
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  logout() {
    return from(
      signOut(this.auth)
    );
  }
  // Acceso rápido al uid del usuario actual (null si no está autenticado).
  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}
