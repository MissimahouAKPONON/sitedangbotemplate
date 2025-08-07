import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { DocumentationComponent } from '../components/documentation.component';

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DocumentationComponent
  ],
  template: `
    <div class="documentation-page">
      <app-header></app-header>
      <main>
        <app-documentation></app-documentation>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .documentation-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class DocumentationPageComponent {}