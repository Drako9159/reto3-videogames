import { Routes } from '@angular/router';
import { MostPopulateComponent } from './pages/most-populate/most-populate.component';
import { MostDownloadedComponent } from './pages/most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { AddGameComponent } from './pages/add-game/add-game.component';

export const routes: Routes = [
  { path: 'most-populate', component: MostPopulateComponent },
  { path: 'most-downloaded', component: MostDownloadedComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
