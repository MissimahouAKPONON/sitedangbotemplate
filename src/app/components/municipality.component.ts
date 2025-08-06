import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-municipality',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="municipality">
      <div class="container">
        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Municipalité de Dangbo</h1>
            <p class="hero-subtitle">
              Découvrez l'organisation municipale, les élus et l'administration de la ville de Dangbo
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hôtel de ville de Dangbo">
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="municipality-grid">
          <!-- Left Column: Le Maire et les élus -->
          <div class="left-column">
            <div class="section-block">
              <h2>Le Maire et les élus</h2>
              
              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">👥</div>
                  <h3>Le Maire, les Adjoints au Maire et son cabinet</h3>
                </div>
                <div class="content">
                  <div class="mayor-card">
                    <div class="mayor-photo">
                      <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Maire de Dangbo">
                    </div>
                    <div class="mayor-info">
                      <h4>Monsieur le Maire</h4>
                      <p>Élu depuis 2020, il dirige l'équipe municipale avec détermination pour le développement de Dangbo.</p>
                    </div>
                  </div>
                  <div class="adjoints-list">
                    <div class="adjoint-item" *ngFor="let adjoint of adjoints">
                      <div class="adjoint-icon">{{ adjoint.icon }}</div>
                      <div class="adjoint-info">
                        <h5>{{ adjoint.title }}</h5>
                        <p>{{ adjoint.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">👥</div>
                  <h3>Les CA et les Présidents de commission</h3>
                </div>
                <div class="content">
                  <div class="commission-list">
                    <div class="commission-item" *ngFor="let commission of commissions">
                      <div class="commission-icon">{{ commission.icon }}</div>
                      <div class="commission-info">
                        <h5>{{ commission.name }}</h5>
                        <p>{{ commission.description }}</p>
                        <span class="president">Président : {{ commission.president }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">👨‍💼</div>
                  <h3>Le Conseil de Supervision</h3>
                </div>
                <div class="content">
                  <p>Le Conseil de Supervision assure le contrôle et le suivi des actions municipales. Il veille à la bonne gouvernance et à la transparence dans la gestion des affaires publiques.</p>
                  <div class="supervision-members">
                    <div class="member-card" *ngFor="let member of supervisionMembers">
                      <div class="member-icon">{{ member.icon }}</div>
                      <div class="member-info">
                        <h5>{{ member.role }}</h5>
                        <p>{{ member.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">👥</div>
                  <h3>Les Conseillers</h3>
                </div>
                <div class="content">
                  <p>Le conseil municipal de Dangbo est composé de {{ councilors.length }} conseillers élus pour un mandat de 5 ans.</p>
                  <div class="councilors-grid">
                    <div class="councilor-card" *ngFor="let councilor of councilors">
                      <div class="councilor-photo">
                        <img [src]="councilor.photo" [alt]="councilor.name">
                      </div>
                      <div class="councilor-info">
                        <h5>{{ councilor.name }}</h5>
                        <p class="councilor-role">{{ councilor.role }}</p>
                        <p class="councilor-commission">{{ councilor.commission }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Organe administratif et Délibérations -->
          <div class="right-column">
            <div class="section-block">
              <h2>Organe administratif et technique</h2>
              
              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">⚙️</div>
                  <h3>Le Secrétaire Exécutif et les Responsables administratifs et techniques</h3>
                </div>
                <div class="content">
                  <div class="admin-structure">
                    <div class="admin-item" *ngFor="let admin of adminStaff">
                      <div class="admin-icon">{{ admin.icon }}</div>
                      <div class="admin-info">
                        <h5>{{ admin.title }}</h5>
                        <p>{{ admin.description }}</p>
                        <div class="admin-services">
                          <span class="service-tag" *ngFor="let service of admin.services">{{ service }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="section-block">
              <h2>Délibérations</h2>
              
              <div class="subsection">
                <div class="subsection-header">
                  <div class="icon">📋</div>
                  <h3>Les délibérations du Conseil Municipal</h3>
                </div>
                <div class="content">
                  <p>Retrouvez toutes les délibérations et décisions du conseil municipal de Dangbo.</p>
                  <div class="deliberations-list">
                    <div class="deliberation-item" *ngFor="let deliberation of deliberations">
                      <div class="deliberation-date">
                        <span class="day">{{ getDay(deliberation.date) }}</span>
                        <span class="month">{{ getMonth(deliberation.date) }}</span>
                        <span class="year">{{ getYear(deliberation.date) }}</span>
                      </div>
                      <div class="deliberation-content">
                        <h5>{{ deliberation.title }}</h5>
                        <p>{{ deliberation.description }}</p>
                        <div class="deliberation-meta">
                          <span class="session-type">{{ deliberation.sessionType }}</span>
                          <button class="download-btn">📄 Télécharger</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="view-all-deliberations">
                    <button class="btn-primary">Voir toutes les délibérations</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Municipal Image Section -->
        <div class="municipal-image-section">
          <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Vue de la municipalité de Dangbo">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .municipality {
      padding: 2rem 0;
      background: linear-gradient(180deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
      min-height: 100vh;
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

    .municipality-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .section-block {
      background: #ffffff;
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      margin-bottom: 2rem;
    }

    .section-block h2 {
      font-size: 2rem;
      color: #000000;
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 1rem;
    }

    .section-block h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 2px;
    }

    .subsection {
      margin-bottom: 2.5rem;
    }

    .subsection:last-child {
      margin-bottom: 0;
    }

    .subsection-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: #DDDCF6;
      border-radius: 10px;
    }

    .icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 8px;
    }

    .subsection-header h3 {
      font-size: 1.2rem;
      color: #000000;
      margin: 0;
    }

    .content {
      padding: 0 1rem;
    }

    .mayor-card {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      background: #DDDCF6;
      padding: 1.5rem;
      border-radius: 15px;
      margin-bottom: 2rem;
    }

    .mayor-photo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
    }

    .mayor-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mayor-info h4 {
      color: #6763E1;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .mayor-info p {
      color: #72444A;
      line-height: 1.5;
      margin: 0;
    }

    .adjoints-list, .commission-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .adjoint-item, .commission-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #6763E1;
    }

    .adjoint-icon, .commission-icon {
      font-size: 1.2rem;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DDDCF6;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .adjoint-info h5, .commission-info h5 {
      color: #6763E1;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .adjoint-info p, .commission-info p {
      color: #72444A;
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

    .president {
      font-size: 0.8rem;
      color: #5AB156;
      font-weight: 600;
    }

    .supervision-members {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }

    .member-card {
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      background: #DDDCF6;
      border-radius: 10px;
    }

    .member-icon {
      font-size: 1.2rem;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #6763E1;
      color: white;
      border-radius: 6px;
      flex-shrink: 0;
    }

    .member-info h5 {
      color: #6763E1;
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
    }

    .member-info p {
      color: #72444A;
      font-size: 0.8rem;
      line-height: 1.3;
      margin: 0;
    }

    .councilors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .councilor-card {
      background: #DDDCF6;
      padding: 1rem;
      border-radius: 10px;
      text-align: center;
      border: 1px solid #6763E1;
    }

    .councilor-photo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1rem;
    }

    .councilor-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .councilor-info h5 {
      color: #000000;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .councilor-role {
      color: #6763E1;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .councilor-commission {
      color: #72444A;
      font-size: 0.75rem;
      margin: 0;
    }

    .admin-structure {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .admin-item {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .admin-icon {
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

    .admin-info h5 {
      color: #6763E1;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .admin-info p {
      color: #72444A;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .admin-services {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .service-tag {
      background: #ffffff;
      color: #6763E1;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid #6763E1;
    }

    .deliberations-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    .deliberation-item {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .deliberation-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      padding: 1rem;
      border-radius: 10px;
      min-width: 80px;
      text-align: center;
    }

    .day {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
    }

    .month {
      font-size: 0.8rem;
      text-transform: uppercase;
      margin: 0.25rem 0;
    }

    .year {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .deliberation-content {
      flex: 1;
    }

    .deliberation-content h5 {
      color: #000000;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .deliberation-content p {
      color: #72444A;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .deliberation-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .session-type {
      background: #5AB156;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .download-btn {
      background: #6763E1;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .download-btn:hover {
      background: #5AB156;
      transform: translateY(-2px);
    }

    .view-all-deliberations {
      text-align: center;
      margin-top: 2rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .municipal-image-section {
      margin-top: 3rem;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .municipal-image-section img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      .municipality {
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

      .municipality-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-block {
        padding: 1.5rem;
      }

      .mayor-card {
        flex-direction: column;
        text-align: center;
      }

      .supervision-members {
        grid-template-columns: 1fr;
      }

      .councilors-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }

      .deliberation-item {
        flex-direction: column;
      }

      .deliberation-date {
        align-self: flex-start;
        min-width: auto;
        width: fit-content;
      }
    }
  `]
})
export class MunicipalityComponent {
  adjoints = [
    {
      icon: '🏛️',
      title: '1er Adjoint au Maire',
      description: 'Chargé des finances et du développement économique'
    },
    {
      icon: '🏗️',
      title: '2ème Adjoint au Maire',
      description: 'Chargé de l\'urbanisme et des travaux publics'
    },
    {
      icon: '🎓',
      title: '3ème Adjoint au Maire',
      description: 'Chargé de l\'éducation et de la jeunesse'
    }
  ];

  commissions = [
    {
      icon: '💰',
      name: 'Commission des Finances',
      description: 'Gestion budgétaire et contrôle financier',
      president: 'M. ADJOVI Jean'
    },
    {
      icon: '🏗️',
      name: 'Commission Urbanisme',
      description: 'Aménagement urbain et développement territorial',
      president: 'Mme KOSSOU Marie'
    },
    {
      icon: '🌱',
      name: 'Commission Environnement',
      description: 'Protection environnementale et développement durable',
      president: 'M. DOSSOU Pierre'
    },
    {
      icon: '🤝',
      name: 'Commission Affaires Sociales',
      description: 'Action sociale et solidarité communautaire',
      president: 'Mme AGBODJI Sylvie'
    }
  ];

  supervisionMembers = [
    {
      icon: '👨‍💼',
      role: 'Président du Conseil',
      description: 'Supervision générale des activités municipales'
    },
    {
      icon: '📊',
      role: 'Contrôleur Financier',
      description: 'Vérification des comptes et audits'
    },
    {
      icon: '⚖️',
      role: 'Conseiller Juridique',
      description: 'Conseil en matière légale et réglementaire'
    },
    {
      icon: '📋',
      role: 'Secrétaire Général',
      description: 'Coordination administrative'
    }
  ];

  councilors = [
    {
      name: 'M. AKPOVI Joseph',
      role: 'Conseiller Municipal',
      commission: 'Commission Finances',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mme GBEDO Françoise',
      role: 'Conseillère Municipale',
      commission: 'Commission Sociale',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'M. HOUNGBO André',
      role: 'Conseiller Municipal',
      commission: 'Commission Urbanisme',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mme TOGNON Célestine',
      role: 'Conseillère Municipale',
      commission: 'Commission Environnement',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'M. ZANNOU Mathieu',
      role: 'Conseiller Municipal',
      commission: 'Commission Culture',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mme ASSOGBA Victoire',
      role: 'Conseillère Municipale',
      commission: 'Commission Jeunesse',
      photo: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  adminStaff = [
    {
      icon: '👨‍💼',
      title: 'Secrétaire Exécutif',
      description: 'Coordination générale de l\'administration municipale et mise en œuvre des décisions du conseil.',
      services: ['Administration', 'Coordination', 'Suivi des projets']
    },
    {
      icon: '💰',
      title: 'Responsable Financier',
      description: 'Gestion des finances municipales, élaboration du budget et contrôle des dépenses.',
      services: ['Budget', 'Comptabilité', 'Trésorerie']
    },
    {
      icon: '🏗️',
      title: 'Responsable Technique',
      description: 'Supervision des travaux publics, maintenance des infrastructures et projets d\'aménagement.',
      services: ['Travaux publics', 'Infrastructure', 'Maintenance']
    },
    {
      icon: '👥',
      title: 'Responsable des Ressources Humaines',
      description: 'Gestion du personnel municipal, formation et développement des compétences.',
      services: ['Personnel', 'Formation', 'Recrutement']
    }
  ];

  deliberations = [
    {
      title: 'Adoption du budget municipal 2025',
      description: 'Vote du budget primitif pour l\'exercice 2025 avec les orientations budgétaires.',
      date: '2025-01-15',
      sessionType: 'Session Ordinaire'
    },
    {
      title: 'Projet de réhabilitation du marché central',
      description: 'Approbation du projet de modernisation du marché central de Dangbo.',
      date: '2025-02-20',
      sessionType: 'Session Extraordinaire'
    },
    {
      title: 'Convention de partenariat touristique',
      description: 'Signature d\'une convention pour le développement du tourisme lacustre.',
      date: '2025-03-10',
      sessionType: 'Session Ordinaire'
    },
    {
      title: 'Règlement municipal sur l\'environnement',
      description: 'Adoption du nouveau règlement pour la protection de l\'environnement.',
      date: '2025-04-05',
      sessionType: 'Session Ordinaire'
    }
  ];

  getDay(dateString: string): string {
    return new Date(dateString).getDate().toString().padStart(2, '0');
  }

  getMonth(dateString: string): string {
    const months = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'];
    return months[new Date(dateString).getMonth()];
  }

  getYear(dateString: string): string {
    return new Date(dateString).getFullYear().toString();
  }
}