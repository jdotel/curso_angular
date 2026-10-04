// app.config.ts
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
//import { provideRouter } from '@angular/router';
//import { provideRouter, withComponentInputBinding } from '@angular/router';
//import { routes } from './app.routes';

//import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { TituloConSufijo } from './compartido/titulo';


registerLocaleData(localeEs);


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: TitleStrategy, useClass: TituloConSufijo },

    //provideBrowserGlobalErrorListeners(),
    //provideRouter(routes),
    //provideRouter(routes, withComponentInputBinding()),
    //{ provide: LOCALE_ID, useValue: 'es' },
  ],
};

