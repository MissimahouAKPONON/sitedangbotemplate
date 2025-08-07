import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="service-detail">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a routerLink="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <a routerLink="/services" class="breadcrumb-link">Services</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Célébration de mariage</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="service-category">
              <span class="category-icon">📋</span>
              <span>État civil et services funéraires</span>
            </div>
            <h1>Célébration de mariage</h1>
            <p class="hero-subtitle">
              Organisez votre cérémonie de mariage civil dans les meilleures conditions avec l'accompagnement de nos services municipaux.
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cérémonie de mariage">
          </div>
        </div>

        <!-- Main Content -->
        <div class="content-grid">
          <!-- Left Column: Information -->
          <div class="main-content">
            <!-- Description -->
            <div class="content-section">
              <h2>Description du service</h2>
              <p>
                La célébration du mariage civil est un acte officiel qui unit deux personnes devant la loi. 
                Cette cérémonie se déroule en mairie en présence de l'officier d'état civil et de témoins.
              </p>
              <p>
                Notre équipe vous accompagne dans toutes les démarches administratives et vous aide à 
                organiser cette journée importante dans les meilleures conditions.
              </p>
            </div>

            <!-- Conditions -->
            <div class="content-section">
              <h2>Conditions requises</h2>
              <div class="requirements-grid">
                <div class="requirement-item">
                  <div class="requirement-icon">👥</div>
                  <div class="requirement-content">
                    <h3>Âge minimum</h3>
                    <p>18 ans révolus pour les deux futurs époux</p>
                  </div>
                </div>
                <div class="requirement-item">
                  <div class="requirement-icon">📍</div>
                  <div class="requirement-content">
                    <h3>Domicile</h3>
                    <p>Au moins un des futurs époux doit résider dans la commune</p>
                  </div>
                </div>
                <div class="requirement-item">
                  <div class="requirement-icon">📋</div>
                  <div class="requirement-content">
                    <h3>Publication des bans</h3>
                    <p>Obligatoire 10 jours avant la cérémonie</p>
                  </div>
                </div>
                <div class="requirement-item">
                  <div class="requirement-icon">👨‍👩‍👧‍👦</div>
                  <div class="requirement-content">
                    <h3>Témoins</h3>
                    <p>2 à 4 témoins majeurs avec pièce d'identité</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents -->
            <div class="content-section">
              <h2>Documents nécessaires</h2>
              <div class="documents-list">
                <div class="document-category">
                  <h3>Pour chaque futur époux :</h3>
                  <ul>
                    <li>
                      <span class="doc-icon">📄</span>
                      <span>Copie intégrale d'acte de naissance (moins de 3 mois)</span>
                    </li>
                    <li>
                      <span class="doc-icon">🆔</span>
                      <span>Pièce d'identité en cours de validité</span>
                    </li>
                    <li>
                      <span class="doc-icon">🏠</span>
                      <span>Justificatif de domicile (moins de 3 mois)</span>
                    </li>
                    <li>
                      <span class="doc-icon">👤</span>
                      <span>Liste des témoins avec leurs coordonnées</span>
                    </li>
                  </ul>
                </div>
                <div class="document-category">
                  <h3>Documents complémentaires si applicable :</h3>
                  <ul>
                    <li>
                      <span class="doc-icon">⚖️</span>
                      <span>Jugement de divorce définitif (si divorcé)</span>
                    </li>
                    <li>
                      <span class="doc-icon">📋</span>
                      <span>Acte de décès du conjoint (si veuf/veuve)</span>
                    </li>
                    <li>
                      <span class="doc-icon">🌍</span>
                      <span>Certificat de coutume (si étranger)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Procedure -->
            <div class="content-section">
              <h2>Démarches à suivre</h2>
              <div class="procedure-steps">
                <div class="step" *ngFor="let step of procedureSteps; let i = index">
                  <div class="step-number">{{ i + 1 }}</div>
                  <div class="step-content">
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.description }}</p>
                    <span class="step-duration">{{ step.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Practical Info -->
          <div class="sidebar">
            <!-- Quick Info -->
            <div class="info-card">
              <h3>Informations pratiques</h3>
              <div class="info-items">
                <div class="info-item">
                  <span class="info-icon">💰</span>
                  <div>
                    <strong>Tarif</strong>
                    <p>Gratuit</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">⏱️</span>
                  <div>
                    <strong>Délai</strong>
                    <p>1 mois minimum avant la date souhaitée</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">📅</span>
                  <div>
                    <strong>Validité</strong>
                    <p>1 an après publication des bans</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">🕐</span>
                  <div>
                    <strong>Durée</strong>
                    <p>30 à 45 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="contact-card">
              <h3>Contact</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div>
                    <strong>Service État Civil</strong>
                    <p>Mairie de Dangbo<br>Place de l'Hôtel de Ville</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <p>+229 XX XX XX XX</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>etatcivil&#64;dangbo.bj</p>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">🕒</span>
                  <div>
                    <strong>Horaires</strong>
                    <p>Lun-Ven : 8h-16h<br>Sam : 8h-12h</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="actions-card">
              <h3>Actions</h3>
              <div class="action-buttons">
                <button class="btn-primary">
                  <span>📅</span>
                  Prendre rendez-vous
                </button>
                <button class="btn-secondary">
                  <span>📄</span>
                  Télécharger le dossier
                </button>
                <button class="btn-secondary">
                  <span>📧</span>
                  Poser une question
                </button>
              </div>
            </div>

            <!-- Related Services -->
            <div class="related-services">
              <h3>Services liés</h3>
              <div class="related-list">
                <a href="#" class="related-item">
                  <span class="related-icon">📋</span>
                  <span>Déclaration de naissance</span>
                </a>
                <a href="#" class="related-item">
                  <span class="related-icon">🏠</span>
                  <span>Attestation de recensement</span>
                </a>
                <a href="#" class="related-item">
                  <span class="related-icon">📄</span>
                  <span>Copie d'acte de mariage</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .service-detail {
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

    .service-category {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      width: fit-content;
    }

    .category-icon {
      font-size: 1.2rem;
    }

    .hero-content h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.2rem;
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

    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .content-section {
      background: #ffffff;
      padding: 2.5rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      margin-bottom: 2rem;
    }

    .content-section h2 {
      font-size: 1.8rem;
      color: #000000;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .content-section h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 2px;
    }

    .content-section p {
      color: #72444A;
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    .requirements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .requirement-item {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .requirement-icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 10px;
      flex-shrink: 0;
    }

    .requirement-content h3 {
      color: #6763E1;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .requirement-content p {
      color: #72444A;
      font-size: 0.9rem;
      margin: 0;
    }

    .documents-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .document-category h3 {
      color: #6763E1;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .document-category ul {
      list-style: none;
      padding: 0;
    }

    .document-category li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.75rem;
      background: #DDDCF6;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      border: 1px solid #6763E1;
    }

    .doc-icon {
      font-size: 1.2rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .procedure-steps {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .step {
      display: flex;
      gap: 1.5rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
      position: relative;
    }

    .step:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 2rem;
      bottom: -1.5rem;
      width: 2px;
      height: 1.5rem;
      background: #6763E1;
    }

    .step-number {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      flex-shrink: 0;
    }

    .step-content h3 {
      color: #6763E1;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .step-content p {
      color: #72444A;
      margin-bottom: 0.5rem;
    }

    .step-duration {
      color: #5AB156;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card, .contact-card, .actions-card, .related-services {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .info-card h3, .contact-card h3, .actions-card h3, .related-services h3 {
      color: #000000;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }

    .info-items, .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .info-item, .contact-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .info-icon, .contact-icon {
      font-size: 1.2rem;
      width: 30px;
      flex-shrink: 0;
      margin-top: 0.2rem;
    }

    .info-item strong, .contact-item strong {
      color: #6763E1;
      display: block;
      margin-bottom: 0.25rem;
    }

    .info-item p, .contact-item p {
      color: #72444A;
      margin: 0;
      font-size: 0.9rem;
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .btn-primary, .btn-secondary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      text-align: left;
      justify-content: center;
    }

    .btn-primary {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .btn-secondary {
      background: #DDDCF6;
      color: #6763E1;
      border: 1px solid #6763E1;
    }

    .btn-secondary:hover {
      background: #6763E1;
      color: white;
      transform: translateY(-2px);
    }

    .related-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .related-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #DDDCF6;
      border-radius: 8px;
      color: #000000;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .related-item:hover {
      background: #6763E1;
      color: white;
      transform: translateX(5px);
      border-color: #6763E1;
    }

    .related-icon {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .service-detail {
        padding: 1rem 0;
      }

      .hero-section {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
        text-align: center;
      }

      .hero-content h1 {
        font-size: 2.2rem;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .content-section {
        padding: 1.5rem;
      }

      .requirements-grid {
        grid-template-columns: 1fr;
      }

      .step {
        flex-direction: column;
        text-align: center;
      }

      .step-number {
        align-self: center;
      }

      .info-card, .contact-card, .actions-card, .related-services {
        padding: 1.5rem;
      }
    }
  `]
})
export class ServiceDetailComponent {
  procedureSteps = [
    {
      title: 'Constitution du dossier',
      description: 'Rassemblez tous les documents nécessaires et prenez rendez-vous avec le service état civil.',
      duration: '1-2 semaines'
    },
    {
      title: 'Dépôt du dossier',
      description: 'Remettez votre dossier complet au service état civil. Vérification des pièces et audition des futurs époux.',
      duration: '1 jour'
    },
    {
      title: 'Publication des bans',
      description: 'Affichage obligatoire en mairie pendant 10 jours. Possibilité d\'opposition pendant cette période.',
      duration: '10 jours'
    },
    {
      title: 'Fixation de la date',
      description: 'Choix de la date de cérémonie en fonction des disponibilités de la mairie et de vos souhaits.',
      duration: '1 jour'
    },
    {
      title: 'Cérémonie de mariage',
      description: 'Célébration officielle en présence de l\'officier d\'état civil, des époux et des témoins.',
      duration: '30-45 min'
    }
  ];
}