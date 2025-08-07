import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { DiscoverDangboPageComponent } from './pages/discover-dangbo-page.component';
import { MunicipalityPageComponent } from './pages/municipality-page.component';
import { ServicesPageComponent } from './pages/services-page.component';
import { ServiceDetailPageComponent } from './pages/service-detail-page.component';
import { DocumentationPageComponent } from './pages/documentation-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'decouvrir-dangbo', component: DiscoverDangboPageComponent },
  { path: 'municipalite', component: MunicipalityPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/celebration-mariage', component: ServiceDetailPageComponent },
  { path: 'documentation', component: DocumentationPageComponent },
  { path: '**', redirectTo: '' }
];