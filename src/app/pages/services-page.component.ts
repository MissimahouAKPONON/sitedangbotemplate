import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ServicesComponent } from '../components/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ServicesComponent
  ],
  template: `
    <div class="services-page">
      <app-header></app-header>
      <main>
        <app-services></app-services>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .services-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class ServicesPageComponent {}