import { Component } from '&#64;angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ContactComponent } from '../components/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent
  ],
  template: `
    <div class="contact-page">
      <app-header></app-header>
      <main>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .contact-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class ContactPageComponent {}