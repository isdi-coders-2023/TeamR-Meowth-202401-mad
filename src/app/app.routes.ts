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
    loadComponent: () => import ( './feature/details/details.component')
  },
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', redirectTo: 'home' },
  //   {
  //   path: 'favourites',
  //   title: 'Favourite'
  //   loadComponent: () => import ( "./feature/")
  // },
  //   {
  //   path: 'create'
  //   loadComponent: () => import ( "./feature/")
  // },

];
