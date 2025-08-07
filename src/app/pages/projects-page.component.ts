import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ProjectsComponent } from '../components/projects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProjectsComponent
  ],
  template: `
    <div class="projects-page">
      <app-header></app-header>
      <main>
        <app-projects></app-projects>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .projects-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
  `]
})
export class ProjectsPageComponent {}