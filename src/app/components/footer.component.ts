import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Contact</h3>
            <div class="contact-info">
              <p><span class="contact-icon">📍</span> Place de l'Hôtel de Ville, 01000 Ville Exemple</p>
              <p><span class="contact-icon">📞</span> +33 1 23 45 67 89</p>
              <p><span class="contact-icon">✉️</span> contact villeexemple.fr</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Services Rapides</h3>
            <ul class="footer-links">
              <li><a href="#">État Civil</a></li>
              <li><a href="#">Urbanisme</a></li>
              <li><a href="#">Taxes Locales</a></li>
              <li><a href="#">Démarches en ligne</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Informations</h3>
            <ul class="footer-links">
              <li><a href="#">Horaires d'ouverture</a></li>
              <li><a href="#">Plan de la ville</a></li>
              <li><a href="#">Transport public</a></li>
              <li><a href="#">Urgences</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Suivez-nous</h3>
            <div class="social-links">
              <a href="#" class="social-link">📘 Facebook</a>
              <a href="#" class="social-link">🐦 Twitter</a>
              <a href="#" class="social-link">📷 Instagram</a>
              <a href="#" class="social-link">💼 LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div class="footer-partners">
          <h4>Partenaires</h4>
          <div class="partners-grid">
            <div class="partner-logo" *ngFor="let partner of partners">
              <span>{{ partner.icon }}</span>
              <p>{{ partner.name }}</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Ville Exemple. Tous droits réservés.</p>
          <div class="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #72444A 0%, #000000 100%);
      color: #DDDCF6;
      padding: 3rem 0 1rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section h3 {
      color: #ffffff;
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .footer-section h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 2px;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .contact-icon {
      font-size: 1.2rem;
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: #DDDCF6;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #6763E1;
      transform: translateX(5px);
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .social-link {
      color: #DDDCF6;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .social-link:hover {
      color: #6763E1;
      transform: translateX(5px);
    }

    .footer-partners {
      margin-bottom: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #6763E1;
    }

    .footer-partners h4 {
      color: #ffffff;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .partner-logo {
      background: rgba(255, 255, 255, 0.05);
      padding: 1rem;
      border-radius: 10px;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid #6763E1;
    }

    .partner-logo:hover {
      background: rgba(103, 99, 225, 0.2);
      transform: translateY(-3px);
    }

    .partner-logo span {
      font-size: 2rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    .partner-logo p {
      font-size: 0.8rem;
      color: #DDDCF6;
      margin: 0;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid #6763E1;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom p {
      color: #DDDCF6;
      margin: 0;
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
    }

    .footer-bottom-links a {
      color: #DDDCF6;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #6763E1;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 0 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .partners-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .social-links {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  partners = [
    { icon: '🏛️', name: 'Préfecture' },
    { icon: '🏢', name: 'Région' },
    { icon: '🏛️', name: 'Département' },
    { icon: '🇪🇺', name: 'Union Européenne' },
    { icon: '🌍', name: 'Coopération' }
  ];
}