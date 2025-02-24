import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { provideHttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { icons } from '../assets/svg';

export const appConfig: ApplicationConfig = {
  providers: [
    DatePipe,
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideSvgIcons(icons)
  ]
};
