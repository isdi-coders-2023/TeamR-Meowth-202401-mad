import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./feature/home/home.component'),
  },
  {
    path: 'details',
    title: 'details',
    loadComponent: () => import('./feature/details/details.component'),
  },
  {
    path: 'error',
    title: 'error',
    loadComponent: () => import('./feature/error/error.component'),
  },
  {
    path: 'favorite',
    title: 'favorite',
    loadComponent: () => import('./feature/favorite/favorite.component'),
  },
  {
    path: 'create',
    title: 'create',
    loadComponent: () => import('./feature/createcard/createcard.component'),
  },
  {
    path: 'edit',
    title: 'edit',
    loadComponent: () =>
      import('./feature/editcard/editcard/editcard.component'),
  },
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', redirectTo: 'home' },
];
