import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ActualitesComponent } from '../components/actualites.component';

@Component({
  selector: 'app-actualites-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ActualitesComponent
  ],
  template: `
    <div class="actualites-page">
      <app-header></app-header>
      <main>
        <app-actualites></app-actualites>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .actualites-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class ActualitesPageComponent {}