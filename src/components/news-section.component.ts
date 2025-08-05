import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';
import { NewsItem } from '../models/news.model';
import { NewsDetailComponent } from './news-detail.component';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, NewsDetailComponent],
  template: `
    <section class="news-section" id="actualites">
      <div class="container">
        <div class="section-header">
          <h2>Actualités du Maire</h2>
          <button class="view-all-btn" (click)="viewAllNews()">Voir toutes les actualités →</button>
        </div>
        
        <div class="news-grid grid grid-3">
          <article class="news-card" *ngFor="let news of recentNews; let i = index" 
                   [style.animation-delay]="(i * 0.2) + 's'">
            <div class="news-image">
              <img [src]="news.imageUrl" [alt]="news.title" *ngIf="news.imageUrl">
              <div class="image-placeholder" *ngIf="!news.imageUrl">
                <span>{{ news.category.icon }}</span>
              </div>
              <div class="news-date">{{ formatDate(news.date) }}</div>
              <div class="category-badge" [style.background-color]="news.category.color">
                {{ news.category.name }}
              </div>
            </div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.excerpt }}</p>
              <div class="news-meta">
                <span class="author">{{ news.author }}</span>
                <div class="tags">
                  <span class="tag" *ngFor="let tag of news.tags.slice(0, 2)">{{ tag }}</span>
                </div>
              </div>
              <button class="read-more" (click)="readNews(news)">Lire la suite</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Modal pour afficher l'actualité -->
    <div class="news-modal" *ngIf="selectedNews" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">×</button>
        <app-news-detail [newsItem]="selectedNews"></app-news-detail>
      </div>
    </div>
  `,
  styles: [`
    .news-section {
      padding: 5rem 0;
      background: linear-gradient(180deg, #ffffff 0%, #DDDCF6 50%, #ffffff 100%);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #000000;
      margin: 0;
      position: relative;
    }

    .section-header h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 2px;
    }

    .view-all-btn {
      background: none;
      border: 2px solid #6763E1;
      color: #72444A;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .view-all-btn:hover {
      border-color: #5AB156;
      color: #5AB156;
      background: #ffffff;
    }

    .news-grid {
      animation: fadeInUp 0.8s ease-out;
    }

    .news-card {
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border: 1px solid #6763E1;
      animation: slideInUp 0.6s ease-out both;
    }

    .news-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .news-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .news-card:hover .news-image img {
      transform: scale(1.05);
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #DDDCF6 0%, #ffffff 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-placeholder span {
      font-size: 3rem;
      opacity: 0.7;
    }

    .category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .news-date {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      color: #72444A;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .news-content {
      padding: 1.5rem;
    }

    .news-content h3 {
      font-size: 1.25rem;
      color: #000000;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .author {
      font-size: 0.85rem;
      color: #72444A;
      font-weight: 500;
    }

    .tags {
      display: flex;
      gap: 0.25rem;
    }

    .tag {
      background: #DDDCF6;
      color: #72444A;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 500;
    }


    .news-content p {
      color: #72444A;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .read-more {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .read-more:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.3);
    }

    .news-modal {
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
      border-radius: 15px;
      max-width: 800px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
    }

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #72444A;
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 1001;
      transition: all 0.3s ease;
    }

    .close-btn:hover {
      background: #6763E1;
      transform: scale(1.1);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .news-section {
        padding: 3rem 0;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .view-all-btn {
        align-self: stretch;
        text-align: center;
      }

      .news-modal {
        padding: 1rem;
      }
    }
  `]
})
export class NewsSectionComponent {
  recentNews: NewsItem[] = [];
  selectedNews: NewsItem | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.recentNews = this.newsService.getRecentNews(3);
  }

  readNews(news: NewsItem) {
    this.selectedNews = news;
  }

  closeModal() {
    this.selectedNews = null;
  }

  viewAllNews() {
    // Navigation vers la page complète des actualités
    console.log('Navigation vers toutes les actualités');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}