import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { DiscoverDangboPageComponent } from './pages/discover-dangbo-page.component';
import { MunicipalityPageComponent } from './pages/municipality-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'decouvrir-dangbo', component: DiscoverDangboPageComponent },
  { path: 'municipalite', component: MunicipalityPageComponent },
  { path: '**', redirectTo: '' }
];