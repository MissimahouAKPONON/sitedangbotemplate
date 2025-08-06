import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { DiscoverDangboPageComponent } from './pages/discover-dangbo-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'decouvrir-dangbo', component: DiscoverDangboPageComponent },
  { path: '**', redirectTo: '' }
];