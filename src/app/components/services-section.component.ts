import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-header text-center">
          <h2>Services & Projets</h2>
          <p>Découvrez nos initiatives pour améliorer votre quotidien</p>
        </div>
        
        <div class="services-grid grid grid-2">
          <div class="service-category">
            <h3>🏛️ Actualités des Élus</h3>
            <div class="service-items">
              <div class="service-item" *ngFor="let item of elusItems">
                <div class="service-icon">{{ item.icon }}</div>
                <div class="service-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <span class="service-date">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="service-category">
            <h3>📋 Plan de Développement</h3>
            <div class="service-items">
              <div class="service-item" *ngFor="let item of developmentItems">
                <div class="service-icon">{{ item.icon }}</div>
                <div class="service-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <span class="service-date">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="announcements-section">
          <h3>📢 Avis & Communiqués</h3>
          <div class="announcements-grid grid grid-3">
            <div class="announcement-card" *ngFor="let announcement of announcements">
              <div class="announcement-header">
                <span class="announcement-type">{{ announcement.type }}</span>
                <span class="announcement-date">{{ announcement.date }}</span>
              </div>
              <h4>{{ announcement.title }}</h4>
              <p>{{ announcement.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 5rem 0;
      background: linear-gradient(180deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
    }

    .section-header {
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #000000;
      margin-bottom: 1rem;
    }

    .section-header p {
      font-size: 1.2rem;
      color: #72444A;
      max-width: 600px;
      margin: 0 auto;
    }

    .service-category {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .service-category h3 {
      font-size: 1.5rem;
      color: #000000;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #6763E1;
    }

    .service-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .service-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #DDDCF6;
      border-radius: 10px;
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .service-item:hover {
      transform: translateX(5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      border-color: #5AB156;
    }

    .service-icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ffffff, #DDDCF6);
      border-radius: 10px;
      flex-shrink: 0;
    }

    .service-content h4 {
      font-size: 1.1rem;
      color: #000000;
      margin-bottom: 0.5rem;
    }

    .service-content p {
      color: #72444A;
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

    .service-date {
      font-size: 0.8rem;
      color: #6763E1;
      font-weight: 600;
    }

    .announcements-section {
      margin-top: 4rem;
      padding-top: 3rem;
      border-top: 2px solid #6763E1;
    }

    .announcements-section h3 {
      font-size: 2rem;
      color: #000000;
      margin-bottom: 2rem;
      text-align: center;
    }

    .announcement-card {
      background: #ffffff;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .announcement-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }

    .announcement-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .announcement-type {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .announcement-date {
      font-size: 0.85rem;
      color: #72444A;
      font-weight: 500;
    }

    .announcement-card h4 {
      color: #000000;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .announcement-card p {
      color: #72444A;
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 768px) {
      .services-section {
        padding: 3rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .service-category {
        padding: 1.5rem;
      }

      .service-item {
        flex-direction: column;
        text-align: center;
      }

      .service-icon {
        align-self: center;
      }
    }
  `]
})
export class ServicesSectionComponent {
  elusItems = [
    {
      icon: '👥',
      title: 'Renouvellement Commission Administrative Paritaire',
      description: 'Mise en place de la nouvelle CAP pour améliorer la gestion du personnel municipal.',
      date: '23-07-2025'
    },
    {
      icon: '🏗️',
      title: 'Réhabilitation Infrastructure Publique',
      description: 'Programme de modernisation des équipements communaux et des espaces publics.',
      date: '20-07-2025'
    }
  ];

  developmentItems = [
    {
      icon: '📚',
      title: 'Construction Nouvelles Classes',
      description: 'Extension des capacités scolaires pour répondre à la croissance démographique.',
      date: '15-08-2025'
    },
    {
      icon: '🏥',
      title: 'Centre de Santé Gynécologique',
      description: 'Nouveau centre spécialisé pour améliorer l\'accès aux soins de santé féminine.',
      date: '10-08-2025'
    }
  ];

  announcements = [
    {
      type: 'Communiqué',
      title: 'Municipalité de Cotonou communique',
      description: 'Informations importantes concernant les services municipaux et les démarches administratives.',
      date: '27-07-2025'
    },
    {
      type: 'Appel d\'offres',
      title: 'Travaux de réhabilitation urbaine',
      description: 'Lancement de l\'appel d\'offres pour les travaux d\'aménagement du centre-ville.',
      date: '25-07-2025'
    },
    {
      type: 'Information',
      title: 'Nouvelle tarification municipale',
      description: 'Mise à jour des tarifs des services municipaux applicable dès septembre 2025.',
      date: '22-07-2025'
    }
  ];
}