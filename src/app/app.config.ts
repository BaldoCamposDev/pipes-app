import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';

import localEs from '@angular/common/locales/es-MX';
import localFr from '@angular/common/locales/fr';
import { LocaleService } from './pages/services/locale.service';

registerLocaleData(localEs, 'es-MX');
registerLocaleData(localFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      // useValue: 'es-MX',
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale,
    },
  ],
};
