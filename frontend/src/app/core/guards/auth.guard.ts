import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const router = inject(Router); // Inject the router
  const authService = inject(AuthService); // Inject the auth service

  return authService.validateSession().pipe(
    map(() => {
      const user = authService.getUser();
      if (route.routeConfig?.path === 'dashboard' || route.parent?.routeConfig?.path === 'dashboard') {
        if (user?.email !== 'amaldonadojuarez@gmail.com')
          router.navigate(['/blog']);
      }
      // If the session is valid, allow access
      return true;
    }),
    catchError(() => {
      // Token is invalid, redirect to /auth/login
      router.navigate(['/auth/login']);
      return of(false); // Return false to block access
    })
  );
};
