import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4Lxx3KUt3wYVpmKMht_KCnbFRO9o2924",
  authDomain: "ppw-portafolio.firebaseapp.com",
  projectId: "ppw-portafolio",
  storageBucket: "ppw-portafolio.firebasestorage.app",
  messagingSenderId: "292846756019",
  appId: "1:292846756019:web:dc1150ff1aefa44b45d0c6",
  measurementId: "G-NC5M45DRVC"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
