import { Routes } from '@angular/router';
import { Hero } from './features/home/hero-section/hero-section';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: Hero,
  },
];
