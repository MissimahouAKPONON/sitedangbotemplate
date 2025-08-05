import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';
import { NewsItem, NewsCategory } from '../models/news.model';
import { NewsDetailComponent } from './news-detail.component';

@Component({
  selector: 'app-news-categories',
  standalone: true,
  imports: [CommonModule, NewsDetailComponent],
  template: `
    <section class="news-categories-section">
      <div class="container">
        <div class="section-header">
          <h2>Actualités par Catégorie</h2>
          <p>Retrouvez toutes les informations importantes classées par thématique</p>
        </div>

        <!-- Filtres de catégories -->
        <div class="category-filters">
          <button 
            class="category-filter" 
            [class.active]="selectedCategory === 'all'"
            (click)="selectCategory('all')">
            <span class="filter-icon">📰</span>
            <span>Toutes les actualités</span>
            <span class="count">({{ allNews.length }})</span>
          </button>
          <button 
            *ngFor="let category of categories" 
            class="category-filter"
            [class.active]="selectedCategory === category.id"
            [style.--category-color]="category.color"
            (click)="selectCategory(category.id)">
            <span class="filter-icon">{{ category.icon }}</span>
            <span>{{ category.name }}</span>
            <span class="count">({{ getNewsByCategory(category.id).length }})</span>
          </button>
        </div>

        <!-- Actualités filtrées -->
        <div class="filtered-news">
          <div class="news-header" *ngIf="selectedCategory !== 'all'">
            <div class="category-info">
              <span class="category-icon">{{ getCurrentCategory()?.icon }}</span>
              <div>
                <h3>{{ getCurrentCategory()?.name }}</h3>
                <p>{{ getCurrentCategory()?.description }}</p>
              </div>
            </div>
          </div>

          <div class="news-grid" *ngIf="filteredNews.length > 0">
            <article 
              class="news-card" 
              *ngFor="let news of filteredNews; let i = index"
              [style.animation-delay]="(i * 0.1) + 's'"
              (click)="selectNews(news)">
              <div class="news-image">
                <img [src]="news.imageUrl" [alt]="news.title" *ngIf="news.imageUrl">
                <div class="image-placeholder" *ngIf="!news.imageUrl">
                  <span>{{ news.category.icon }}</span>
                </div>
                <div class="news-category-badge" [style.background-color]="news.category.color">
                  {{ news.category.name }}
                </div>
                <div class="news-date">{{ formatDate(news.date) }}</div>
              </div>
              <div class="news-content">
                <div class="news-meta">
                  <span class="author">{{ news.author }}</span>
                  <div class="tags">
                    <span class="tag" *ngFor="let tag of news.tags.slice(0, 2)">{{ tag }}</span>
                  </div>
                </div>
                <h3>{{ news.title }}</h3>
                <p>{{ news.excerpt }}</p>
                <button class="read-more-btn">Lire l'article complet</button>
              </div>
            </article>
          </div>

          <div class="no-news" *ngIf="filteredNews.length === 0">
            <div class="no-news-icon">📰</div>
            <h3>Aucune actualité dans cette catégorie</h3>
            <p>Revenez bientôt pour découvrir de nouvelles informations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de présentation d'actualité -->
    <div class="news-modal" *ngIf="selectedNewsItem" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">×</button>
        <app-news-detail [newsItem]="selectedNewsItem"></app-news-detail>
      </div>
    </div>
  `,
  styles: [`
    .news-categories-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
      min-height: 100vh;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
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

    .category-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: #ffffff;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }

    .category-filter {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: #DDDCF6;
      border: 2px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      color: #000000;
    }

    .category-filter:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-color: var(--category-color, #6763E1);
    }

    .category-filter.active {
      background: var(--category-color, #6763E1);
      color: white;
      border-color: var(--category-color, #6763E1);
    }

    .filter-icon {
      font-size: 1.2rem;
    }

    .count {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.2rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .category-filter.active .count {
      background: rgba(255, 255, 255, 0.3);
    }

    .news-header {
      margin-bottom: 2rem;
    }

    .category-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }

    .category-icon {
      font-size: 3rem;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DDDCF6;
      border-radius: 15px;
    }

    .category-info h3 {
      font-size: 1.5rem;
      color: #000000;
      margin-bottom: 0.5rem;
    }

    .category-info p {
      color: #72444A;
      margin: 0;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .news-card {
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      cursor: pointer;
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
      font-size: 3rem;
    }

    .news-category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .news-date {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #72444A;
    }

    .news-content {
      padding: 1.5rem;
    }

    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .author {
      font-size: 0.9rem;
      color: #72444A;
      font-weight: 500;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
    }

    .tag {
      background: #DDDCF6;
      color: #72444A;
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      font-size: 0.7rem;
      font-weight: 500;
    }

    .news-content h3 {
      font-size: 1.2rem;
      color: #000000;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .news-content p {
      color: #72444A;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .read-more-btn {
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

    .read-more-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.3);
    }

    .no-news {
      text-align: center;
      padding: 4rem 2rem;
      background: #ffffff;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }

    .no-news-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .no-news h3 {
      color: #000000;
      margin-bottom: 1rem;
    }

    .no-news p {
      color: #72444A;
      margin: 0;
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

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .news-categories-section {
        padding: 2rem 0;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .category-filters {
        padding: 1rem;
      }

      .category-filter {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
      }

      .news-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .category-info {
        flex-direction: column;
        text-align: center;
      }

      .news-modal {
        padding: 1rem;
      }
    }
  `]
})
export class NewsCategoriesComponent implements OnInit {
  categories: NewsCategory[] = [];
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  selectedCategory: string = 'all';
  selectedNewsItem: NewsItem | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.categories = this.newsService.getCategories();
    this.allNews = this.newsService.getAllNews();
    this.filteredNews = this.allNews;
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    if (categoryId === 'all') {
      this.filteredNews = this.allNews;
    } else {
      this.filteredNews = this.newsService.getNewsByCategory(categoryId);
    }
  }

  getCurrentCategory(): NewsCategory | undefined {
    return this.categories.find(cat => cat.id === this.selectedCategory);
  }

  getNewsByCategory(categoryId: string): NewsItem[] {
    return this.newsService.getNewsByCategory(categoryId);
  }

  selectNews(news: NewsItem) {
    this.selectedNewsItem = news;
  }

  closeModal() {
    this.selectedNewsItem = null;
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