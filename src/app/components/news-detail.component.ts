import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItem } from '../models/news.model';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="news-detail" *ngIf="newsItem">
      <div class="news-header">
        <div class="news-image" *ngIf="newsItem.imageUrl">
          <img [src]="newsItem.imageUrl" [alt]="newsItem.title">
          <div class="image-overlay">
            <div class="category-badge" [style.background-color]="newsItem.category.color">
              <span class="category-icon">{{ newsItem.category.icon }}</span>
              {{ newsItem.category.name }}
            </div>
          </div>
        </div>
        
        <div class="news-meta">
          <div class="meta-row">
            <span class="date">{{ formatDate(newsItem.date) }}</span>
            <span class="author">Par {{ newsItem.author }}</span>
          </div>
          <div class="tags">
            <span class="tag" *ngFor="let tag of newsItem.tags">#{{ tag }}</span>
          </div>
        </div>
        
        <h1>{{ newsItem.title }}</h1>
        <p class="excerpt">{{ newsItem.excerpt }}</p>
      </div>
      
      <div class="news-content">
        <div class="content-text">
          {{ newsItem.content }}
        </div>
        
        <div class="content-actions">
          <button class="share-btn">
            <span>📤</span>
            Partager cet article
          </button>
          <button class="print-btn">
            <span>🖨️</span>
            Imprimer
          </button>
        </div>
      </div>
      
      <div class="news-footer">
        <div class="related-category">
          <h3>Plus d'actualités dans "{{ newsItem.category.name }}"</h3>
          <p>{{ newsItem.category.description }}</p>
          <button class="category-link" [style.background-color]="newsItem.category.color">
            Voir toutes les actualités {{ newsItem.category.name }}
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .news-detail {
      max-width: 800px;
      margin: 0 auto;
    }

    .news-header {
      margin-bottom: 2rem;
    }

    .news-image {
      position: relative;
      width: 100%;
      height: 300px;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 1.5rem;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1.5rem;
    }

    .category-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .category-icon {
      font-size: 1.2rem;
    }

    .news-meta {
      margin-bottom: 1.5rem;
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .date {
      color: #6763E1;
      font-weight: 600;
      font-size: 1rem;
    }

    .author {
      color: #72444A;
      font-style: italic;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      background: #DDDCF6;
      color: #72444A;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .news-detail h1 {
      font-size: 2.2rem;
      color: #000000;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    .excerpt {
      font-size: 1.2rem;
      color: #72444A;
      line-height: 1.6;
      font-style: italic;
      padding: 1rem;
      background: #DDDCF6;
      border-radius: 10px;
      border-left: 4px solid #6763E1;
    }

    .news-content {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      margin-bottom: 2rem;
    }

    .content-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #000000;
      margin-bottom: 2rem;
    }

    .content-actions {
      display: flex;
      gap: 1rem;
      padding-top: 2rem;
      border-top: 2px solid #DDDCF6;
    }

    .share-btn, .print-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border: 2px solid #6763E1;
      background: transparent;
      color: #6763E1;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .share-btn:hover, .print-btn:hover {
      background: #6763E1;
      color: white;
      transform: translateY(-2px);
    }

    .news-footer {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }

    .related-category h3 {
      color: #000000;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .related-category p {
      color: #72444A;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .category-link {
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      .news-detail {
        padding: 1rem;
      }

      .news-detail h1 {
        font-size: 1.8rem;
      }

      .excerpt {
        font-size: 1rem;
      }

      .content-text {
        font-size: 1rem;
      }

      .content-actions {
        flex-direction: column;
      }

      .meta-row {
        flex-direction: column;
        align-items: flex-start;
      }

      .news-image {
        height: 200px;
      }
    }
  `]
})
export class NewsDetailComponent {
  @Input() newsItem!: NewsItem;

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}