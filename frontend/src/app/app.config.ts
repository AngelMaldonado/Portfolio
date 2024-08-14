import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { githubIcon } from '../assets/svg/github';
import { blogIcon } from '../assets/svg/blog';
import { contactIcon } from '../assets/svg/contact';
import { cvIcon } from '../assets/svg/cv';
import { calendarIcon } from '../assets/svg/calendar';
import { mailIcon } from '../assets/svg/mail';
import { whatsappIcon } from '../assets/svg/whatsapp';
import { linkedinIcon } from '../assets/svg/linkedin';
import { saveIcon } from '../assets/svg/save';
import { trashIcon } from '../assets/svg/trash';
import { editIcon } from '../assets/svg/edit';
import { searchIcon } from '../assets/svg/search';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideSvgIcons([githubIcon, blogIcon, contactIcon, cvIcon, calendarIcon, mailIcon, whatsappIcon, linkedinIcon, saveIcon, trashIcon, editIcon, searchIcon])
  ]
};
