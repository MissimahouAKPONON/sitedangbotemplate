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
            [class.active]="mobileMenuOpen"
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav class="nav" [class.nav-open]="mobileMenuOpen">
            <ul class="nav-list">
              <li><a routerLink="/">Accueil</a></li>
              <li><a routerLink="/actualites">Actualités</a></li>
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
      justify-content: flex-end;
      align-items: center;
      padding: 1rem 0;
      gap: 2rem;
    }

    .logo-section {
      display: flex;
      align-items: center;
      margin-right: auto;
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
      padding: 0.75rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .mobile-menu-btn:hover {
      background: rgba(103, 99, 225, 0.1);
    }

    .mobile-menu-btn span {
      width: 25px;
      height: 3px;
      background-color: #6763E1;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }

    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
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
      font-weight: 400;
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
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
        order: 2;
      }

      .logo-section {
        order: 1;
        margin-right: 0;
        flex: 1;
      }

      .logo-text h1 {
        font-size: 1.5rem;
      }

      .logo-text span {
        font-size: 0.8rem;
      }

      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #ffffff 0%, #DDDCF6 100%);
        border-top: 2px solid #6763E1;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 0 0 15px 15px;
      }

      .nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-list {
        flex-direction: column;
        padding: 1.5rem;
        gap: 0;
      }

      .nav-list a {
        display: block;
        padding: 1.2rem 1rem;
        border-bottom: 1px solid rgba(103, 99, 225, 0.2);
        border-radius: 8px;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .nav-list a:hover {
        background: linear-gradient(135deg, #6763E1, #5AB156);
        color: white;
        transform: translateX(5px);
        border-bottom-color: transparent;
      }

      .nav-list a::after {
        display: none;
      }

      .nav-list li:last-child a {
        border-bottom: none;
        margin-bottom: 0;
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