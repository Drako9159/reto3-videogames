import { Routes } from '@angular/router';
import { MostPopulateComponent } from './pages/most-populate/most-populate.component';
import { MostDownloadedComponent } from './pages/most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AddGameComponent } from './pages/add-game/add-game.component';
import { hasSessionGuard } from './guards/has-session/has-session.guard';

export const routes: Routes = [
  { path: 'most-populate', component: MostPopulateComponent, canActivate: [hasSessionGuard] },
  { path: 'most-downloaded', component: MostDownloadedComponent, canActivate: [hasSessionGuard] },
  { path: 'coming-soon', component: ComingSoonComponent, canActivate: [hasSessionGuard] },
  { path: 'add-game', component: AddGameComponent, canActivate: [hasSessionGuard] },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: "full"},
  { path: '**', redirectTo: "/auth/login", pathMatch: "full"},
];
