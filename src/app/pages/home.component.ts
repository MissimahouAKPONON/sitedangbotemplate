import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { HeroComponent } from '../components/hero.component';
import { NewsSectionComponent } from '../components/news-section.component';
import { ServicesSectionComponent } from '../components/services-section.component';
import { NewsCategoriesComponent } from '../components/news-categories.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    NewsSectionComponent,
    ServicesSectionComponent,
    NewsCategoriesComponent,
    FooterComponent
  ],
  template: `
    <div class="home-page">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-news-section></app-news-section>
        <app-news-categories></app-news-categories>
        <app-services-section></app-services-section>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class HomeComponent {}