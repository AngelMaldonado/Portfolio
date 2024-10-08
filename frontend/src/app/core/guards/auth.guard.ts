import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject the router

  const token = localStorage.getItem('token'); // Check for the token in local storage
  if (token) {
    return true; // Token exists, allow access
  } else {
    // No token, redirect to /auth/login
    router.navigate(['/auth/login']);
    return false; // Deny access
  }
};
