import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Services</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Services</h1>
            <p class="hero-subtitle">
              Découvrez tous les services municipaux disponibles pour faciliter vos démarches administratives
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Services municipaux">
          </div>
        </div>

        <!-- Services Grid -->
        <div class="services-grid">
          <!-- État civil et services funéraires -->
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon civil">
                <span>📋</span>
              </div>
              <h2>État civil et services funéraires</h2>
            </div>
            <div class="service-content">
              <ul class="service-list">
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Célébration de mariage</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Déclaration de décès</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Déclaration de naissance</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Dépôt de signature</span>
                </li>
              </ul>
              <button class="explore-btn">
                Explorer →
              </button>
            </div>
          </div>

          <!-- Affaires domaniales et du foncier -->
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon domain">
                <span>💼</span>
              </div>
              <h2>Affaires domaniales et du foncier</h2>
            </div>
            <div class="service-content">
              <ul class="service-list">
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Attestation de recensement</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Compulsion (certificat de conformité du nom au répertoire)</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Permutation par parcelle</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Vente de convention</span>
                </li>
              </ul>
              <button class="explore-btn">
                Explorer →
              </button>
            </div>
          </div>

          <!-- Services marchands et autres occupations -->
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon merchant">
                <span>⚖️</span>
              </div>
              <h2>Services marchands et autres occupations de domaines public</h2>
            </div>
            <div class="service-content">
              <ul class="service-list">
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Droit d'autorisation</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Occupation du domaine public à l'occasion des cérémonies bruyantes/jour (bâches < 100M²)</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Occupation du domaine public à l'occasion des cérémonies bruyantes/jour (bâches > 100M²)</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Occupation du domaine public local aux fins d'activités lucratives</span>
                </li>
              </ul>
              <button class="explore-btn">
                Explorer →
              </button>
            </div>
          </div>

          <!-- Espace publicitaire -->
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon advertising">
                <span>📢</span>
              </div>
              <h2>Espace publicitaire</h2>
            </div>
            <div class="service-content">
              <ul class="service-list">
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Panneaux d'indication et totems</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Pour la publicité sur les autres produits de consommation</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Pour les activités permanentes</span>
                </li>
                <li class="service-item">
                  <span class="item-icon">▶</span>
                  <span>Publicité de boissons alcoolisées et tabacs</span>
                </li>
              </ul>
              <button class="explore-btn">
                Explorer →
              </button>
            </div>
          </div>
        </div>

        <!-- Additional Services Section -->
        <div class="additional-services">
          <h2>Services en ligne</h2>
          <p>Simplifiez vos démarches grâce à nos services numériques disponibles 24h/24</p>
          <div class="online-services-grid">
            <div class="online-service-item">
              <div class="online-service-icon">🌐</div>
              <h3>Demandes en ligne</h3>
              <p>Effectuez vos demandes d'actes et certificats directement en ligne</p>
            </div>
            <div class="online-service-item">
              <div class="online-service-icon">📱</div>
              <h3>Suivi de dossier</h3>
              <p>Suivez l'avancement de vos dossiers en temps réel</p>
            </div>
            <div class="online-service-item">
              <div class="online-service-icon">💳</div>
              <h3>Paiement en ligne</h3>
              <p>Réglez vos taxes et redevances de manière sécurisée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .service-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .service-header {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .service-icon {
      width: 60px;
      height: 60px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      flex-shrink: 0;
    }

    .service-icon.civil {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
    }

    .service-icon.domain {
      background: linear-gradient(135deg, #5AB156, #4ECDC4);
      color: white;
    }

    .service-icon.merchant {
      background: linear-gradient(135deg, #FF6B6B, #6763E1);
      color: white;
    }

    .service-icon.advertising {
      background: linear-gradient(135deg, #4ECDC4, #45B7D1);
      color: white;
    }

    .service-header h2 {
      font-size: 1.4rem;
      color: #000000;
      line-height: 1.3;
      margin: 0;
    }

    .service-content {
      padding-left: 0;
    }

    .service-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }

    .service-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #DDDCF6;
      transition: all 0.3s ease;
    }

    .service-item:hover {
      background: #DDDCF6;
      padding-left: 1rem;
      border-radius: 8px;
      border-bottom: 1px solid transparent;
    }

    .item-icon {
      color: #6763E1;
      font-size: 0.8rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    .service-item span:last-child {
      color: #000000;
      line-height: 1.5;
      font-size: 0.95rem;
    }

    .explore-btn {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .explore-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .additional-services {
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      text-align: center;
    }

    .additional-services h2 {
      font-size: 2.5rem;
      color: #000000;
      margin-bottom: 1rem;
    }

    .additional-services > p {
      font-size: 1.2rem;
      color: #72444A;
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .online-services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .online-service-item {
      background: #DDDCF6;
      padding: 2rem;
      border-radius: 15px;
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .online-service-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .online-service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .online-service-item h3 {
      color: #6763E1;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .online-service-item p {
      color: #72444A;
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 768px) {
      .services {
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

      .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .service-card {
        padding: 1.5rem;
      }

      .service-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .service-header h2 {
        font-size: 1.2rem;
      }

      .additional-services {
        padding: 2rem;
      }

      .additional-services h2 {
        font-size: 2rem;
      }

      .online-services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {}