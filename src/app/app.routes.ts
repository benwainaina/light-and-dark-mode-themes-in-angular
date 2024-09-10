import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../../projects/home/src/lib/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../../projects/profile/src/lib/profile.component').then(
        (c) => c.ProfileComponent
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
