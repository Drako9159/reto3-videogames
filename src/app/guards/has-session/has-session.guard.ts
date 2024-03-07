import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../service/auth.service';

export const hasSessionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isLogged();
};
