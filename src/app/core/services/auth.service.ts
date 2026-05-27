import { Injectable, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
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

  logout() {
    return from(
      signOut(this.auth)
    );
  }
}
