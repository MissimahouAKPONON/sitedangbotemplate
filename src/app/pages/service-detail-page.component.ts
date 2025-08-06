import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ServiceDetailComponent } from '../components/service-detail.component';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ServiceDetailComponent
  ],
  template: `
    <div class="service-detail-page">
      <app-header></app-header>
      <main>
        <app-service-detail></app-service-detail>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .service-detail-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class ServiceDetailPageComponent {}