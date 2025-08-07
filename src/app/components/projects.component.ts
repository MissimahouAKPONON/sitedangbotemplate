import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Projets</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Projets de Développement</h1>
            <p class="hero-subtitle">
              Découvrez les grands projets qui transforment Dangbo et améliorent la qualité de vie de nos citoyens
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Projets de développement">
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button 
            *ngFor="let filter of projectFilters" 
            class="filter-tab"
            [class.active]="selectedFilter === filter.id"
            (click)="selectFilter(filter.id)">
            <span class="filter-icon">{{ filter.icon }}</span>
            <span>{{ filter.name }}</span>
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of getFilteredProjects(); let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-status" [class]="project.status.toLowerCase()">
                {{ project.status }}
              </div>
              <div class="project-category" [style.background-color]="project.categoryColor">
                {{ project.category }}
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              
              <!-- Progress Bar -->
              <div class="progress-section">
                <div class="progress-header">
                  <span class="progress-label">Avancement</span>
                  <span class="progress-percentage">{{ project.progress }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="project.progress"></div>
                </div>
              </div>

              <!-- Project Details -->
              <div class="project-details">
                <div class="detail-item">
                  <span class="detail-icon">💰</span>
                  <span class="detail-label">Budget:</span>
                  <span class="detail-value">{{ project.budget }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-icon">📅</span>
                  <span class="detail-label">Échéance:</span>
                  <span class="detail-value">{{ project.deadline }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-icon">👥</span>
                  <span class="detail-label">Bénéficiaires:</span>
                  <span class="detail-value">{{ project.beneficiaries }}</span>
                </div>
              </div>

              <button class="view-details-btn" (click)="viewProjectDetails(project)">
                Voir les détails
              </button>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="statistics-section">
          <h2>Projets en chiffres</h2>
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let stat of projectStats">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-info">
                <h3>{{ stat.value }}</h3>
                <p>{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Section -->
        <div class="timeline-section">
          <h2>Calendrier des projets</h2>
          <div class="timeline">
            <div class="timeline-item" *ngFor="let event of timelineEvents; let i = index"
                 [class.completed]="event.completed">
              <div class="timeline-marker">
                <span class="timeline-icon">{{ event.icon }}</span>
              </div>
              <div class="timeline-content">
                <div class="timeline-date">{{ event.date }}</div>
                <h4>{{ event.title }}</h4>
                <p>{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details Modal -->
    <div class="project-modal" *ngIf="selectedProject" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ selectedProject.title }}</h2>
          <button class="close-btn" (click)="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <div class="project-image-large">
            <img [src]="selectedProject.image" [alt]="selectedProject.title">
          </div>
          <div class="project-full-description">
            <h3>Description complète</h3>
            <p>{{ selectedProject.fullDescription }}</p>
            
            <h3>Objectifs</h3>
            <ul>
              <li *ngFor="let objective of selectedProject.objectives">{{ objective }}</li>
            </ul>
            
            <h3>Phases du projet</h3>
            <div class="project-phases">
              <div class="phase-item" *ngFor="let phase of selectedProject.phases">
                <div class="phase-header">
                  <h4>{{ phase.name }}</h4>
                  <span class="phase-status" [class]="phase.status.toLowerCase()">{{ phase.status }}</span>
                </div>
                <p>{{ phase.description }}</p>
                <div class="phase-timeline">
                  <span class="phase-date">{{ phase.startDate }} - {{ phase.endDate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects {
      padding: 2rem 0;
      background: linear-gradient(180deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
      min-height: 100vh;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.9rem;
    }

    .breadcrumb-link {
      color: #6763E1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .breadcrumb-link:hover {
      color: #5AB156;
    }

    .breadcrumb-separator {
      color: #72444A;
    }

    .breadcrumb-current {
      color: #000000;
      font-weight: 500;
    }

    .hero-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin-bottom: 4rem;
      padding: 3rem;
      background: linear-gradient(135deg, #6763E1 0%, #5AB156 100%);
      border-radius: 20px;
      color: white;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      line-height: 1.6;
      opacity: 0.95;
    }

    .hero-image {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .hero-image img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-tab {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background: #ffffff;
      border: 2px solid #6763E1;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      color: #6763E1;
    }

    .filter-tab:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.2);
    }

    .filter-tab.active {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-color: transparent;
    }

    .filter-icon {
      font-size: 1.2rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .project-card {
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
      animation: slideInUp 0.6s ease-out both;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-status {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .project-status.en-cours {
      background: #FF6B6B;
      color: white;
    }

    .project-status.planifié {
      background: #4ECDC4;
      color: white;
    }

    .project-status.terminé {
      background: #5AB156;
      color: white;
    }

    .project-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .project-content {
      padding: 2rem;
    }

    .project-content h3 {
      font-size: 1.4rem;
      color: #000000;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .project-content > p {
      color: #72444A;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .progress-section {
      margin-bottom: 1.5rem;
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .progress-label {
      font-weight: 600;
      color: #000000;
    }

    .progress-percentage {
      font-weight: 700;
      color: #6763E1;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #DDDCF6;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }

    .detail-icon {
      font-size: 1rem;
      width: 20px;
    }

    .detail-label {
      color: #72444A;
      font-weight: 500;
    }

    .detail-value {
      color: #000000;
      font-weight: 600;
    }

    .view-details-btn {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .view-details-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .statistics-section {
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      margin-bottom: 4rem;
    }

    .statistics-section h2 {
      text-align: center;
      color: #000000;
      margin-bottom: 2rem;
      font-size: 2.2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 15px;
      border: 1px solid #6763E1;
    }

    .stat-icon {
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 12px;
    }

    .stat-info h3 {
      color: #6763E1;
      font-size: 1.8rem;
      margin-bottom: 0.25rem;
    }

    .stat-info p {
      color: #72444A;
      margin: 0;
      font-size: 0.9rem;
    }

    .timeline-section {
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .timeline-section h2 {
      text-align: center;
      color: #000000;
      margin-bottom: 3rem;
      font-size: 2.2rem;
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #6763E1;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 80px;
    }

    .timeline-item.completed .timeline-marker {
      background: #5AB156;
    }

    .timeline-item.completed .timeline-content {
      opacity: 0.8;
    }

    .timeline-marker {
      position: absolute;
      left: 15px;
      top: 0;
      width: 30px;
      height: 30px;
      background: #6763E1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.9rem;
    }

    .timeline-content {
      background: #DDDCF6;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .timeline-date {
      color: #6763E1;
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .timeline-content h4 {
      color: #000000;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .timeline-content p {
      color: #72444A;
      margin: 0;
      line-height: 1.5;
    }

    .project-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 2rem;
    }

    .modal-content {
      background: #ffffff;
      border-radius: 20px;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      border-bottom: 2px solid #6763E1;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 20px 20px 0 0;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .modal-body {
      padding: 2rem;
    }

    .project-image-large {
      margin-bottom: 2rem;
      border-radius: 15px;
      overflow: hidden;
    }

    .project-image-large img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .project-full-description h3 {
      color: #6763E1;
      margin: 2rem 0 1rem 0;
      font-size: 1.3rem;
    }

    .project-full-description p {
      color: #000000;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .project-full-description ul {
      color: #72444A;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .project-full-description li {
      margin-bottom: 0.5rem;
    }

    .project-phases {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .phase-item {
      background: #DDDCF6;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .phase-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .phase-header h4 {
      color: #6763E1;
      margin: 0;
      font-size: 1.1rem;
    }

    .phase-status {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .phase-status.terminé {
      background: #5AB156;
      color: white;
    }

    .phase-status.en-cours {
      background: #FF6B6B;
      color: white;
    }

    .phase-status.planifié {
      background: #4ECDC4;
      color: white;
    }

    .phase-item p {
      color: #72444A;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .phase-timeline {
      color: #6763E1;
      font-weight: 600;
      font-size: 0.9rem;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .projects {
        padding: 1rem 0;
      }

      .hero-section {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
        text-align: center;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }

      .filter-tabs {
        flex-direction: column;
        align-items: center;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-card {
        margin: 0 1rem;
      }

      .statistics-section,
      .timeline-section {
        padding: 2rem;
        margin: 0 1rem 2rem;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .timeline::before {
        left: 15px;
      }

      .timeline-item {
        padding-left: 50px;
      }

      .timeline-marker {
        left: 0;
      }

      .project-modal {
        padding: 1rem;
      }

      .modal-header {
        padding: 1.5rem;
      }

      .modal-body {
        padding: 1.5rem;
      }

      .project-phases {
        gap: 1rem;
      }
    }
  `]
})
export class ProjectsComponent {
  selectedFilter = 'tous';
  selectedProject: any = null;

  projectFilters = [
    { id: 'tous', name: 'Tous les projets', icon: '📋' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
    { id: 'social', name: 'Social', icon: '🤝' },
    { id: 'environnement', name: 'Environnement', icon: '🌱' },
    { id: 'economie', name: 'Économie', icon: '💼' }
  ];

  projects = [
    {
      id: 1,
      title: 'Réhabilitation du Port de Pêche',
      description: 'Modernisation complète du port de pêche avec de nouveaux équipements et infrastructures.',
      fullDescription: 'Ce projet ambitieux vise à transformer le port de pêche de Dangbo en un centre moderne et efficace. Les travaux incluent la reconstruction des quais, l\'installation de chambres froides, la création d\'espaces de vente modernes et l\'amélioration de l\'assainissement.',
      category: 'Infrastructure',
      categoryColor: '#6763E1',
      status: 'En cours',
      progress: 35,
      budget: '2,5 milliards FCFA',
      deadline: 'Mars 2027',
      beneficiaries: '5 000 pêcheurs',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'infrastructure',
      objectives: [
        'Moderniser les infrastructures portuaires',
        'Améliorer les conditions de travail des pêcheurs',
        'Augmenter la capacité de traitement du poisson',
        'Créer 500 nouveaux emplois directs et indirects'
      ],
      phases: [
        {
          name: 'Phase 1 - Études et préparation',
          description: 'Études techniques, environnementales et mobilisation des financements',
          startDate: 'Jan 2025',
          endDate: 'Juin 2025',
          status: 'Terminé'
        },
        {
          name: 'Phase 2 - Travaux de terrassement',
          description: 'Préparation du terrain et démolition des anciennes structures',
          startDate: 'Juil 2025',
          endDate: 'Déc 2025',
          status: 'En cours'
        },
        {
          name: 'Phase 3 - Construction des infrastructures',
          description: 'Construction des quais, bâtiments et équipements',
          startDate: 'Jan 2026',
          endDate: 'Déc 2026',
          status: 'Planifié'
        },
        {
          name: 'Phase 4 - Équipements et mise en service',
          description: 'Installation des équipements et tests de fonctionnement',
          startDate: 'Jan 2027',
          endDate: 'Mar 2027',
          status: 'Planifié'
        }
      ]
    },
    {
      id: 2,
      title: 'Construction du Marché Moderne',
      description: 'Nouveau marché central avec 300 boutiques, parking et équipements modernes.',
      fullDescription: 'Le nouveau marché moderne de Dangbo sera un centre commercial de référence avec des infrastructures de qualité, des espaces de stockage réfrigérés, un système de gestion des déchets et des panneaux solaires pour l\'autonomie énergétique.',
      category: 'Infrastructure',
      categoryColor: '#6763E1',
      status: 'Planifié',
      progress: 15,
      budget: '1,8 milliard FCFA',
      deadline: 'Mars 2027',
      beneficiaries: '2 000 commerçants',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'infrastructure',
      objectives: [
        'Créer un espace commercial moderne et attractif',
        'Améliorer les conditions de vente des commerçants',
        'Dynamiser l\'économie locale',
        'Offrir un environnement sain et sécurisé'
      ],
      phases: [
        {
          name: 'Phase 1 - Conception et études',
          description: 'Élaboration des plans architecturaux et études d\'impact',
          startDate: 'Sep 2025',
          endDate: 'Déc 2025',
          status: 'En cours'
        },
        {
          name: 'Phase 2 - Travaux de construction',
          description: 'Construction de la structure principale et des équipements',
          startDate: 'Jan 2026',
          endDate: 'Déc 2026',
          status: 'Planifié'
        },
        {
          name: 'Phase 3 - Aménagements et ouverture',
          description: 'Aménagements intérieurs et mise en service',
          startDate: 'Jan 2027',
          endDate: 'Mar 2027',
          status: 'Planifié'
        }
      ]
    },
    {
      id: 3,
      title: 'Programme de Reboisement',
      description: 'Plantation de 5 000 arbres sur les berges du lac Nokoué pour lutter contre l\'érosion.',
      fullDescription: 'Ce programme environnemental vise à restaurer l\'écosystème du lac Nokoué par la plantation d\'espèces locales adaptées. Il inclut la création de pépinières communautaires et la formation des populations riveraines.',
      category: 'Environnement',
      categoryColor: '#5AB156',
      status: 'En cours',
      progress: 60,
      budget: '150 millions FCFA',
      deadline: 'Décembre 2025',
      beneficiaries: '10 000 riverains',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'environnement',
      objectives: [
        'Réduire l\'érosion des berges de 70%',
        'Améliorer la qualité de l\'eau du lac',
        'Restaurer la biodiversité locale',
        'Créer 50 emplois verts permanents'
      ],
      phases: [
        {
          name: 'Phase 1 - Création des pépinières',
          description: 'Installation de 3 pépinières communautaires',
          startDate: 'Juin 2025',
          endDate: 'Août 2025',
          status: 'Terminé'
        },
        {
          name: 'Phase 2 - Plantation',
          description: 'Plantation de 5000 arbres sur 10 km de berges',
          startDate: 'Sep 2025',
          endDate: 'Nov 2025',
          status: 'En cours'
        },
        {
          name: 'Phase 3 - Suivi et entretien',
          description: 'Suivi de la croissance et entretien des plantations',
          startDate: 'Déc 2025',
          endDate: 'Déc 2030',
          status: 'Planifié'
        }
      ]
    },
    {
      id: 4,
      title: 'Centre de Santé Gynécologique',
      description: 'Construction d\'un centre spécialisé pour améliorer l\'accès aux soins de santé féminine.',
      fullDescription: 'Ce centre moderne offrira des services de gynécologie, obstétrique et planning familial avec des équipements de pointe et un personnel qualifié pour répondre aux besoins spécifiques des femmes de Dangbo.',
      category: 'Social',
      categoryColor: '#4ECDC4',
      status: 'Planifié',
      progress: 5,
      budget: '800 millions FCFA',
      deadline: 'Juin 2026',
      beneficiaries: '15 000 femmes',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'social',
      objectives: [
        'Améliorer l\'accès aux soins gynécologiques',
        'Réduire la mortalité maternelle et infantile',
        'Offrir des services de planning familial',
        'Former le personnel médical local'
      ],
      phases: [
        {
          name: 'Phase 1 - Études et financement',
          description: 'Études de faisabilité et mobilisation des fonds',
          startDate: 'Jan 2026',
          endDate: 'Mar 2026',
          status: 'Planifié'
        },
        {
          name: 'Phase 2 - Construction',
          description: 'Construction du bâtiment et installation des équipements',
          startDate: 'Avr 2026',
          endDate: 'Mai 2026',
          status: 'Planifié'
        },
        {
          name: 'Phase 3 - Mise en service',
          description: 'Formation du personnel et ouverture du centre',
          startDate: 'Juin 2026',
          endDate: 'Juin 2026',
          status: 'Planifié'
        }
      ]
    },
    {
      id: 5,
      title: 'Extension du Réseau Électrique',
      description: 'Extension de l\'éclairage public et amélioration de la distribution électrique.',
      fullDescription: 'Ce projet vise à étendre le réseau électrique municipal pour couvrir les nouveaux quartiers et améliorer l\'éclairage public pour la sécurité des citoyens.',
      category: 'Infrastructure',
      categoryColor: '#6763E1',
      status: 'En cours',
      progress: 45,
      budget: '600 millions FCFA',
      deadline: 'Août 2025',
      beneficiaries: '8 000 habitants',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'infrastructure',
      objectives: [
        'Étendre l\'éclairage public à 5 nouveaux quartiers',
        'Améliorer la sécurité nocturne',
        'Faciliter les activités économiques',
        'Réduire les coupures d\'électricité'
      ],
      phases: [
        {
          name: 'Phase 1 - Installation des poteaux',
          description: 'Installation de 200 poteaux électriques',
          startDate: 'Mar 2025',
          endDate: 'Mai 2025',
          status: 'Terminé'
        },
        {
          name: 'Phase 2 - Câblage et raccordement',
          description: 'Installation des câbles et raccordement au réseau',
          startDate: 'Juin 2025',
          endDate: 'Juil 2025',
          status: 'En cours'
        },
        {
          name: 'Phase 3 - Tests et mise en service',
          description: 'Tests de fonctionnement et mise en service',
          startDate: 'Août 2025',
          endDate: 'Août 2025',
          status: 'Planifié'
        }
      ]
    },
    {
      id: 6,
      title: 'Programme d\'Aide aux Familles Vulnérables',
      description: 'Soutien alimentaire, scolaire et accompagnement social pour 200 familles.',
      fullDescription: 'Ce programme social complet vise à soutenir les familles les plus vulnérables de Dangbo avec une aide alimentaire mensuelle, un soutien scolaire pour les enfants et un accompagnement dans les démarches administratives.',
      category: 'Social',
      categoryColor: '#4ECDC4',
      status: 'En cours',
      progress: 70,
      budget: '300 millions FCFA',
      deadline: 'Décembre 2025',
      beneficiaries: '200 familles',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      filter: 'social',
      objectives: [
        'Réduire l\'insécurité alimentaire',
        'Améliorer la scolarisation des enfants',
        'Faciliter l\'accès aux services sociaux',
        'Renforcer la cohésion sociale'
      ],
      phases: [
        {
          name: 'Phase 1 - Identification des bénéficiaires',
          description: 'Recensement et sélection des familles vulnérables',
          startDate: 'Jan 2025',
          endDate: 'Fév 2025',
          status: 'Terminé'
        },
        {
          name: 'Phase 2 - Distribution des aides',
          description: 'Distribution mensuelle des aides alimentaires et scolaires',
          startDate: 'Mar 2025',
          endDate: 'Nov 2025',
          status: 'En cours'
        },
        {
          name: 'Phase 3 - Évaluation et suivi',
          description: 'Évaluation de l\'impact et suivi des bénéficiaires',
          startDate: 'Déc 2025',
          endDate: 'Déc 2025',
          status: 'Planifié'
        }
      ]
    }
  ];

  projectStats = [
    { icon: '📊', value: '12', label: 'Projets actifs' },
    { icon: '💰', value: '8,2 Mds', label: 'Budget total' },
    { icon: '👥', value: '45 000', label: 'Bénéficiaires' },
    { icon: '✅', value: '65%', label: 'Taux de réalisation' }
  ];

  timelineEvents = [
    {
      date: 'Janvier 2025',
      title: 'Lancement du Plan de Développement 2025-2030',
      description: 'Adoption officielle du plan quinquennal de développement communal',
      icon: '🚀',
      completed: true
    },
    {
      date: 'Mars 2025',
      title: 'Début des travaux du port de pêche',
      description: 'Commencement des travaux de réhabilitation du port',
      icon: '🏗️',
      completed: true
    },
    {
      date: 'Juin 2025',
      title: 'Lancement du programme de reboisement',
      description: 'Début de la plantation des arbres sur les berges du lac',
      icon: '🌱',
      completed: true
    },
    {
      date: 'Septembre 2025',
      title: 'Début construction marché moderne',
      description: 'Commencement des travaux du nouveau marché central',
      icon: '🏪',
      completed: false
    },
    {
      date: 'Janvier 2026',
      title: 'Ouverture centre de santé gynécologique',
      description: 'Mise en service du nouveau centre de santé',
      icon: '🏥',
      completed: false
    },
    {
      date: 'Mars 2027',
      title: 'Inauguration du port modernisé',
      description: 'Livraison et inauguration du port de pêche rénové',
      icon: '🎉',
      completed: false
    }
  ];

  selectFilter(filterId: string) {
    this.selectedFilter = filterId;
  }

  getFilteredProjects() {
    if (this.selectedFilter === 'tous') {
      return this.projects;
    }
    return this.projects.filter(project => project.filter === this.selectedFilter);
  }

  viewProjectDetails(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}