import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo-section">
            <div class="logo" routerLink="/">
              <img src="src/assets/dg.png" />
              <div class="logo-text">
                <h1>Mairie</h1>
                <span>Dangbo</span>
              </div>
            </div>
          </div>
          
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav class="nav" [class.nav-open]="mobileMenuOpen">
            <ul class="nav-list">
              <li><a routerLink="/" fragment="actualites">Actualités</a></li>
              <li><a routerLink="/decouvrir-dangbo">Découvrir Dangbo</a></li>
              <li><a routerLink="/municipalite">Municipalité</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/documentation">Documentation</a></li>
              <li><a routerLink="/projets">Projets</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid #6763E1;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    .logo-section {
      display: flex;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.02);
    }

    .logo-icon {
      font-size: 2.5rem;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text h1 {
      font-size: 1.8rem;
      color: #000000;
      margin: 0;
      font-weight: 700;
    }

    .logo-text span {
      font-size: 0.9rem;
      color: #72444A;
      margin: 0;
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .mobile-menu-btn span {
      width: 25px;
      height: 3px;
      background-color: #000000;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }

    .nav-list {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-list a {
      color: #000000;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-list a:hover {
      background-color: #ffffff;
      color: #6763E1;
      transform: translateY(-2px);
    }

    .nav-list a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #6763E1;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-list a:hover::after {
      width: 80%;
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
      }

      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #DDDCF6;
        border-top: 1px solid #6763E1;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-list {
        flex-direction: column;
        padding: 1rem;
        gap: 0;
      }

      .nav-list a {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid #6763E1;
      }
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}