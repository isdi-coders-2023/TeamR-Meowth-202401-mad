import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./feature/home/home.component'),
  },
  //   {
  //   path: 'favourites',
  //   title: 'Favourite'
  //   loadComponent: () => import ( "./feature/")
  // },
  //   {
  //   path: 'create'
  //   loadComponent: () => import ( "./feature/")
  // },
    {
    path: 'Details',
    loadComponent: () => import ( "./feature/details/details.component")
  }
];
