import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'ProjectMeowth:Home',
    loadComponent: () => import('./feature/home/home.component'),
  },
  {
    path: 'details',
    title: 'ProjectMeowth:Details',
    loadComponent: () => import('./feature/details/details.component'),
  },
  {
    path: 'error',
    title: 'ProjectMeowth:Error',
    loadComponent: () => import('./feature/error/error.component'),
  },
  {
    path: 'favorite',
    title: 'ProjectMeowth:Favorite',
    loadComponent: () => import('./feature/favorite/favorite.component'),
  },
  {
    path: 'create',
    title: 'ProjectMeowth:Create',
    loadComponent: () => import('./feature/createcard/createcard.component'),
  },
  {
    path: 'edit',
    title: 'ProjectMeowth:Edit',
    loadComponent: () =>
      import('./feature/editcard/editcard/editcard.component'),
  },
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', redirectTo: 'home' },
];
