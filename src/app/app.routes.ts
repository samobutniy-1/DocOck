import { Routes } from '@angular/router';
import { Hero } from './features/home/hero-section/hero-section';
import { CipherCatalog } from './features/ciphers/cipher-catalog/cipher-catalog';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: Hero,
  },
  { path: 'catalog', title: 'Ciphers', component: CipherCatalog },
];
