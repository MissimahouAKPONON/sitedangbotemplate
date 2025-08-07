import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';
import { NewsItem, NewsCategory } from '../models/news.model';
import { NewsDetailComponent } from './news-detail.component';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [CommonModule, NewsDetailComponent],
  template: `
    <section class="actualites">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Actualités</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Actualités de Dangbo</h1>
            <p class="hero-subtitle">
              Restez informé des dernières nouvelles, événements et décisions de votre municipalité
            </p>
          </div>
        </div>

        <!-- Filtres de catégories -->
        <div class="category-filters">
          <h2>Filtrer par catégorie</h2>
          <div class="filters-grid">
            <button 
              class="category-filter" 
              [class.active]="selectedCategory === 'all'"
              (click)="selectCategory('all')">
              <span class="filter-icon">📰</span>
              <div class="filter-content">
                <span class="filter-name">Toutes les actualités</span>
                <span class="filter-count">{{ allNews.length }} articles</span>
              </div>
            </button>
            <button 
              *ngFor="let category of categories" 
              class="category-filter"
              [class.active]="selectedCategory === category.id"
              [style.--category-color]="category.color"
              (click)="selectCategory(category.id)">
              <span class="filter-icon">{{ category.icon }}</span>
              <div class="filter-content">
                <span class="filter-name">{{ category.name }}</span>
                <span class="filter-count">{{ getNewsByCategory(category.id).length }} articles</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Actualité à la une -->
        <div class="featured-news" *ngIf="featuredNews">
          <h2>À la une</h2>
          <div class="featured-card" (click)="selectNews(featuredNews)">
            <div class="featured-image">
              <img [src]="featuredNews.imageUrl" [alt]="featuredNews.title">
              <div class="featured-category" [style.background-color]="featuredNews.category.color">
                {{ featuredNews.category.icon }} {{ featuredNews.category.name }}
              </div>
            </div>
            <div class="featured-content">
              <div class="featured-meta">
                <span class="featured-date">{{ formatDate(featuredNews.date) }}</span>
                <span class="featured-author">{{ featuredNews.author }}</span>
              </div>
              <h3>{{ featuredNews.title }}</h3>
              <p>{{ featuredNews.excerpt }}</p>
              <div class="featured-tags">
                <span class="tag" *ngFor="let tag of featuredNews.tags.slice(0, 3)">#{{ tag }}</span>
              </div>
              <button class="read-featured-btn">Lire l'article complet</button>
            </div>
          </div>
        </div>

        <!-- Actualités filtrées -->
        <div class="filtered-news">
          <div class="news-header">
            <h2 *ngIf="selectedCategory === 'all'">Toutes les actualités</h2>
            <div class="category-info" *ngIf="selectedCategory !== 'all' && getCurrentCategory()">
              <span class="category-icon">{{ getCurrentCategory()?.icon }}</span>
              <div>
                <h2>{{ getCurrentCategory()?.name }}</h2>
                <p>{{ getCurrentCategory()?.description }}</p>
              </div>
            </div>
            <div class="news-count">
              {{ filteredNews.length }} article{{ filteredNews.length > 1 ? 's' : '' }}
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
                    <span class="tag" *ngFor="let tag of news.tags.slice(0, 2)">#{{ tag }}</span>
                  </div>
                </div>
                <h3>{{ news.title }}</h3>
                <p>{{ news.excerpt }}</p>
                <button class="read-more-btn">Lire la suite</button>
              </div>
            </article>
          </div>

          <div class="no-news" *ngIf="filteredNews.length === 0">
            <div class="no-news-icon">📰</div>
            <h3>Aucune actualité dans cette catégorie</h3>
            <p>Revenez bientôt pour découvrir de nouvelles informations.</p>
          </div>
        </div>

        <!-- Newsletter Subscription -->
        <div class="newsletter-section">
          <div class="newsletter-content">
            <h3>Restez informé</h3>
            <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités de Dangbo</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Votre adresse email" class="newsletter-input">
              <button class="newsletter-btn">S'abonner</button>
            </div>
          </div>
          <div class="newsletter-icon">📧</div>
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
    .actualites {
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
      text-align: center;
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

    .category-filters {
      margin-bottom: 4rem;
    }

    .category-filters h2 {
      color: #000000;
      margin-bottom: 2rem;
      font-size: 2rem;
      text-align: center;
    }

    .filters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .category-filter {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: #ffffff;
      border: 2px solid #DDDCF6;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
    }

    .category-filter:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      border-color: var(--category-color, #6763E1);
    }

    .category-filter.active {
      background: var(--category-color, #6763E1);
      color: white;
      border-color: var(--category-color, #6763E1);
    }

    .filter-icon {
      font-size: 2rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DDDCF6;
      border-radius: 12px;
      flex-shrink: 0;
    }

    .category-filter.active .filter-icon {
      background: rgba(255, 255, 255, 0.2);
    }

    .filter-content {
      flex: 1;
    }

    .filter-name {
      display: block;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .filter-count {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .featured-news {
      margin-bottom: 4rem;
    }

    .featured-news h2 {
      color: #000000;
      margin-bottom: 2rem;
      font-size: 2rem;
      text-align: center;
    }

    .featured-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid #6763E1;
    }

    .featured-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .featured-image {
      position: relative;
      height: 300px;
      overflow: hidden;
    }

    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .featured-card:hover .featured-image img {
      transform: scale(1.05);
    }

    .featured-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .featured-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .featured-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .featured-date {
      color: #6763E1;
      font-weight: 600;
    }

    .featured-author {
      color: #72444A;
      font-style: italic;
    }

    .featured-content h3 {
      font-size: 1.8rem;
      color: #000000;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .featured-content p {
      color: #72444A;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex: 1;
    }

    .featured-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .tag {
      background: #DDDCF6;
      color: #72444A;
      padding: 0.4rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .read-featured-btn {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      align-self: flex-start;
    }

    .read-featured-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .news-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .news-header h2 {
      color: #000000;
      font-size: 2rem;
      margin: 0;
    }

    .category-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .category-icon {
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DDDCF6;
      border-radius: 12px;
    }

    .category-info h2 {
      margin-bottom: 0.5rem;
    }

    .category-info p {
      color: #72444A;
      margin: 0;
    }

    .news-count {
      background: #6763E1;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .news-card {
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      cursor: pointer;
      animation: slideInUp 0.6s ease-out both;
      border: 1px solid #6763E1;
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

    .newsletter-section {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      padding: 3rem;
      border-radius: 20px;
      color: white;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .newsletter-content {
      flex: 1;
    }

    .newsletter-content h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .newsletter-content p {
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
    }

    .newsletter-input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
    }

    .newsletter-btn {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid white;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .newsletter-btn:hover {
      background: white;
      color: #6763E1;
    }

    .newsletter-icon {
      font-size: 4rem;
      opacity: 0.3;
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
      .actualites {
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

      .hero-stats {
        flex-direction: row;
        justify-content: space-around;
      }

      .filters-grid {
        grid-template-columns: 1fr;
      }

      .featured-card {
        grid-template-columns: 1fr;
      }

      .featured-image {
        height: 250px;
      }

      .news-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .category-info {
        flex-direction: column;
        text-align: center;
      }

      .news-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-section {
        flex-direction: column;
        text-align: center;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .news-modal {
        padding: 1rem;
      }
    }
  `]
})
export class ActualitesComponent implements OnInit {
  categories: any[] = [];
  allNews: any[] = [];
  filteredNews: any[] = [];
  featuredNews: any = null;
  selectedCategory = 'all';
  selectedNewsItem: any = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.categories = this.newsService.getCategories();
    this.allNews = this.newsService.getAllNews();
    this.filteredNews = this.allNews;
    this.featuredNews = this.allNews[0]; // Premier article comme article à la une
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    if (categoryId === 'all') {
      this.filteredNews = this.allNews.filter(news => news.id !== this.featuredNews?.id);
    } else {
      this.filteredNews = this.newsService.getNewsByCategory(categoryId)
        .filter(news => news.id !== this.featuredNews?.id);
    }
  }

  getCurrentCategory() {
    return this.categories.find(cat => cat.id === this.selectedCategory);
  }

  getNewsByCategory(categoryId: string) {
    return this.newsService.getNewsByCategory(categoryId);
  }

  getThisMonthNews(): number {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return this.allNews.filter(news => {
      const newsDate = new Date(news.date);
      return newsDate.getMonth() === currentMonth && newsDate.getFullYear() === currentYear;
    }).length;
  }

  selectNews(news: any) {
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