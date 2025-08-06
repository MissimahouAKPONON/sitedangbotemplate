import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-carousel">
      <div class="carousel-container">
        <div class="carousel-slides" [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
          <div class="carousel-slide" *ngFor="let slide of slides; let i = index" [class.active]="i === currentSlide">
            <div class="slide-background" [style.background-image]="'url(' + slide.backgroundImage + ')'">
              <div class="slide-overlay"></div>
              <div class="container">
                <div class="slide-content">
                  <div class="flash-news" *ngIf="slide.flashNews">
                    <span class="flash-label">Flash Info</span>
                    <p>{{ slide.flashNews }}</p>
                  </div>
                  <h1>{{ slide.title }}</h1>
                  <p>{{ slide.description }}</p>
                  <div class="slide-buttons" *ngIf="slide.buttons">
                    <button class="btn-primary" *ngFor="let btn of slide.buttons" 
                            [class.btn-secondary]="btn.type === 'secondary'">
                      {{ btn.text }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation dots -->
        <div class="carousel-dots">
          <button 
            *ngFor="let slide of slides; let i = index" 
            class="carousel-dot" 
            [class.active]="i === currentSlide"
            (click)="goToSlide(i)">
          </button>
        </div>
        
        <!-- Navigation arrows -->
        <button class="carousel-arrow carousel-arrow-prev" (click)="previousSlide()">
          <span>‹</span>
        </button>
        <button class="carousel-arrow carousel-arrow-next" (click)="nextSlide()">
          <span>›</span>
        </button>
      </div>
    </section>
  `,
  styles: [`
    .hero-carousel {
      position: relative;
      height: 70vh;
      min-height: 500px;
      overflow: hidden;
    }

    .carousel-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .carousel-slides {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .carousel-slide {
      flex: 0 0 100%;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .slide-background {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
    }

    .slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(103, 99, 225, 0.8) 0%, rgba(90, 177, 86, 0.6) 100%);
    }

    .slide-content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 600px;
      color: white;
      animation: slideInLeft 0.8s ease-out;
    }

    .flash-news {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .flash-label {
      display: inline-block;
      background: rgba(255, 255, 255, 0.3);
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
    }

    .flash-news p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .slide-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      line-height: 1.1;
    }

    .slide-content > p {
      font-size: 1.3rem;
      margin-bottom: 2.5rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      line-height: 1.5;
    }

    .slide-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .btn-primary {
      background: linear-gradient(135deg, #ffffff, #DDDCF6);
      color: #000000;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #6763E1;
      transform: translateY(-3px);
    }

    .carousel-dots {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.75rem;
      z-index: 3;
    }

    .carousel-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid white;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .carousel-dot.active {
      background: white;
      transform: scale(1.2);
    }

    .carousel-dot:hover {
      background: rgba(255, 255, 255, 0.7);
    }

    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-arrow:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-arrow span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .carousel-arrow-prev {
      left: 2rem;
    }

    .carousel-arrow-next {
      right: 2rem;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .hero-carousel {
        height: 60vh;
        min-height: 400px;
      }

      .slide-content {
        padding: 0 1rem;
        text-align: center;
      }

      .slide-content h1 {
        font-size: 2.5rem;
      }

      .slide-content > p {
        font-size: 1.1rem;
      }

      .slide-buttons {
        justify-content: center;
      }

      .btn-primary, .btn-secondary {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
      }

      .carousel-arrow {
        width: 40px;
        height: 40px;
      }

      .carousel-arrow-prev {
        left: 1rem;
      }

      .carousel-arrow-next {
        right: 1rem;
      }

      .carousel-dots {
        bottom: 1rem;
      }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: any;

  slides = [
    {
      title: 'Bienvenue sur le portail de votre ville',
      description: 'Découvrez les actualités, services et projets de votre commune',
      backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      flashNews: 'Session ordinaire du conseil municipal - Mercredi 25 juin 2025',
      buttons: [
        { text: 'Services en ligne', type: 'primary' },
        { text: 'Contactez-nous', type: 'secondary' }
      ]
    },
    {
      title: 'Modernisation de votre ville',
      description: 'Découvrez les grands projets d\'aménagement urbain en cours',
      backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      buttons: [
        { text: 'Voir les projets', type: 'primary' }
      ]
    },
    {
      title: 'Services numériques',
      description: 'Simplifiez vos démarches avec nos services en ligne',
      backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      flashNews: 'Nouvelle plateforme de services municipaux disponible',
      buttons: [
        { text: 'Accéder aux services', type: 'primary' },
        { text: 'Guide d\'utilisation', type: 'secondary' }
      ]
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}