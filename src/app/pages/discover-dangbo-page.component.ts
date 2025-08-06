import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { DiscoverDangboComponent } from '../components/discover-dangbo.component';

@Component({
  selector: 'app-discover-dangbo-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DiscoverDangboComponent
  ],
  template: `
    <div class="discover-page">
      <app-header></app-header>
      <main>
        <app-discover-dangbo></app-discover-dangbo>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .discover-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class DiscoverDangboPageComponent {}