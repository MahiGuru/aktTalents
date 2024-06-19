import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([BrowserAnimationsModule]),
    provideFirebaseApp(() => initializeApp({
      "projectId":"akt-test-app",
      "appId":"1:6232644422:web:f9b2dcddb6b2fe9b706347",
      "databaseURL":"https://akt-test-app-default-rtdb.asia-southeast1.firebasedatabase.app",
      "storageBucket":"akt-test-app.appspot.com",
      "apiKey":"AIzaSyCGEqYnG2LoNjyiUYwTbpGSOHvs-664D1c",
      "authDomain":"akt-test-app.firebaseapp.com",
      "messagingSenderId":"6232644422",
      "measurementId":"G-YBY93LZDNV"
    })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService, UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging())
  ]
};
