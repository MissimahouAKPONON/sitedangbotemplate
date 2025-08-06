import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { MunicipalityComponent } from '../components/municipality.component';

@Component({
  selector: 'app-municipality-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MunicipalityComponent
  ],
  template: `
    <div class="municipality-page">
      <app-header></app-header>
      <main>
        <app-municipality></app-municipality>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .municipality-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class MunicipalityPageComponent {}