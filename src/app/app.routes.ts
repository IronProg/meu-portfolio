import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContatoPageComponent} from './pages/contato-page/contato-page.component';
import {ProjetosPageComponent} from './pages/projetos-page/projetos-page.component';
import {SobrePageComponent} from './pages/sobre-page/sobre-page.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "contato", component: ContatoPageComponent },
  { path: "projetos", component: ProjetosPageComponent },
  { path: "sobre", component: SobrePageComponent },
];
