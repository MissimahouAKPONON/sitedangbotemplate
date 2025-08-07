import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="documentation">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Documentation</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Documentation</h1>
            <p class="hero-subtitle">
              Accédez à tous les documents officiels, délibérations et rapports de la municipalité de Dangbo
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Documentation municipale">
          </div>
        </div>

        <!-- Main Content -->
        <div class="documentation-grid">
          <!-- Left Sidebar: Categories -->
          <div class="sidebar">
            <div class="category-menu">
              <h3>Catégories de documents</h3>
              <div class="menu-items">
                <button 
                  *ngFor="let category of documentCategories" 
                  class="menu-item"
                  [class.active]="selectedCategory === category.id"
                  (click)="selectCategory(category.id)">
                  <span class="menu-icon">{{ category.icon }}</span>
                  <span>{{ category.name }}</span>
                  <span class="count">({{ getDocumentsByCategory(category.id).length }})</span>
                </button>
              </div>
            </div>

            <!-- Featured Document -->
            <div class="featured-document" *ngIf="featuredDocument">
              <h4>Document à la une</h4>
              <div class="featured-content">
                <div class="featured-icon">📋</div>
                <div class="featured-info">
                  <h5>{{ featuredDocument.title }}</h5>
                  <p>{{ featuredDocument.description }}</p>
                  <button class="download-btn" (click)="downloadDocument(featuredDocument)">
                    📄 Télécharger
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Content: Documents -->
          <div class="main-content">
            <!-- Category Header -->
            <div class="category-header" *ngIf="getCurrentCategory()">
              <div class="category-info">
                <span class="category-icon">{{ getCurrentCategory()?.icon }}</span>
                <div>
                  <h2>{{ getCurrentCategory()?.name }}</h2>
                  <p>{{ getCurrentCategory()?.description }}</p>
                </div>
              </div>
            </div>

            <!-- Search and Filters -->
            <div class="search-filters">
              <div class="search-box">
                <input 
                  type="text" 
                  placeholder="Rechercher un document..." 
                  [(ngModel)]="searchTerm"
                  (input)="filterDocuments()"
                  class="search-input">
                <button class="search-btn">🔍</button>
              </div>
              <div class="filter-options">
                <select [(ngModel)]="selectedYear" (change)="filterDocuments()" class="year-filter">
                  <option value="">Toutes les années</option>
                  <option *ngFor="let year of availableYears" [value]="year">{{ year }}</option>
                </select>
                <select [(ngModel)]="sortOrder" (change)="sortDocuments()" class="sort-filter">
                  <option value="date-desc">Plus récent</option>
                  <option value="date-asc">Plus ancien</option>
                  <option value="title-asc">Titre A-Z</option>
                  <option value="title-desc">Titre Z-A</option>
                </select>
              </div>
            </div>

            <!-- Documents List -->
            <div class="documents-list" *ngIf="filteredDocuments.length > 0">
              <div class="document-item" *ngFor="let document of filteredDocuments">
                <div class="document-icon">
                  <span [ngClass]="getDocumentIcon(document.type)">{{ getDocumentIconSymbol(document.type) }}</span>
                </div>
                <div class="document-info">
                  <h4>{{ document.title }}</h4>
                  <p>{{ document.description }}</p>
                  <div class="document-meta">
                    <span class="document-date">{{ formatDate(document.date) }}</span>
                    <span class="document-type">{{ document.type }}</span>
                    <span class="document-size">{{ document.size }}</span>
                  </div>
                </div>
                <div class="document-actions">
                  <button class="view-btn" (click)="viewDocument(document)">
                    👁️ Aperçu
                  </button>
                  <button class="download-btn" (click)="downloadDocument(document)">
                    📥 Télécharger
                  </button>
                </div>
              </div>
            </div>

            <!-- No Documents -->
            <div class="no-documents" *ngIf="filteredDocuments.length === 0">
              <div class="no-docs-icon">📄</div>
              <h3>Aucun document trouvé</h3>
              <p>Aucun document ne correspond à vos critères de recherche.</p>
            </div>

            <!-- Pagination -->
            <div class="pagination" *ngIf="totalPages > 1">
              <button 
                class="page-btn" 
                [disabled]="currentPage === 1"
                (click)="goToPage(currentPage - 1)">
                ‹ Précédent
              </button>
              <span class="page-info">Page {{ currentPage }} sur {{ totalPages }}</span>
              <button 
                class="page-btn" 
                [disabled]="currentPage === totalPages"
                (click)="goToPage(currentPage + 1)">
                Suivant ›
              </button>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="statistics-section">
          <h3>Statistiques de la documentation</h3>
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let stat of documentStats">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-info">
                <h4>{{ stat.value }}</h4>
                <p>{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal d'aperçu du document -->
    <div class="document-preview-modal" *ngIf="selectedDocumentForPreview" (click)="closePreview()">
      <div class="preview-content" (click)="$event.stopPropagation()">
        <div class="preview-header">
          <h3>{{ selectedDocumentForPreview.title }}</h3>
          <button class="close-preview-btn" (click)="closePreview()">×</button>
        </div>
        <div class="preview-body">
          <div class="document-meta-preview">
            <span class="meta-item">📅 {{ formatDate(selectedDocumentForPreview.date) }}</span>
            <span class="meta-item">📄 {{ selectedDocumentForPreview.type }}</span>
            <span class="meta-item">💾 {{ selectedDocumentForPreview.size }}</span>
          </div>
          <div class="document-content" [innerHTML]="selectedDocumentForPreview.content"></div>
        </div>
        <div class="preview-footer">
          <button class="download-btn" (click)="downloadDocument(selectedDocumentForPreview)">
            📥 Télécharger le document complet
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .documentation {
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

    .documentation-grid {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .category-menu {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .category-menu h3 {
      color: #000000;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }

    .menu-items {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #DDDCF6;
      border: 1px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      color: #000000;
    }

    .menu-item:hover {
      background: #6763E1;
      color: white;
      border-color: #6763E1;
    }

    .menu-item.active {
      background: #6763E1;
      color: white;
      border-color: #6763E1;
    }

    .menu-icon {
      font-size: 1.2rem;
      width: 30px;
      text-align: center;
    }

    .count {
      margin-left: auto;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.2rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
    }

    .featured-document {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #5AB156;
    }

    .featured-document h4 {
      color: #5AB156;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .featured-content {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .featured-icon {
      font-size: 2rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5AB156;
      color: white;
      border-radius: 10px;
      flex-shrink: 0;
    }

    .featured-info h5 {
      color: #000000;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .featured-info p {
      color: #72444A;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .main-content {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .category-header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #6763E1;
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
      color: #000000;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }

    .category-info p {
      color: #72444A;
      margin: 0;
    }

    .search-filters {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-box {
      display: flex;
      flex: 1;
      min-width: 300px;
    }

    .search-input {
      flex: 1;
      padding: 1rem;
      border: 2px solid #6763E1;
      border-right: none;
      border-radius: 10px 0 0 10px;
      font-size: 1rem;
      outline: none;
    }

    .search-btn {
      padding: 1rem 1.5rem;
      background: #6763E1;
      color: white;
      border: 2px solid #6763E1;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .search-btn:hover {
      background: #5AB156;
      border-color: #5AB156;
    }

    .filter-options {
      display: flex;
      gap: 1rem;
    }

    .year-filter, .sort-filter {
      padding: 1rem;
      border: 2px solid #6763E1;
      border-radius: 10px;
      background: white;
      color: #000000;
      cursor: pointer;
    }

    .documents-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .document-item {
      display: flex;
      gap: 1.5rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .document-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .document-icon {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      flex-shrink: 0;
      font-size: 1.5rem;
    }

    .document-icon.pdf {
      background: #FF6B6B;
      color: white;
    }

    .document-icon.doc {
      background: #4ECDC4;
      color: white;
    }

    .document-icon.excel {
      background: #5AB156;
      color: white;
    }

    .document-info {
      flex: 1;
    }

    .document-info h4 {
      color: #000000;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .document-info p {
      color: #72444A;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .document-meta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .document-date, .document-type, .document-size {
      font-size: 0.8rem;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-weight: 500;
    }

    .document-date {
      background: #6763E1;
      color: white;
    }

    .document-type {
      background: #5AB156;
      color: white;
    }

    .document-size {
      background: #72444A;
      color: white;
    }

    .document-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-end;
    }

    .view-btn, .download-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      font-size: 0.9rem;
      min-width: 120px;
    }

    .view-btn {
      background: #DDDCF6;
      color: #6763E1;
      border: 1px solid #6763E1;
    }

    .view-btn:hover {
      background: #6763E1;
      color: white;
    }

    .download-btn {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
    }

    .download-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.3);
    }

    .no-documents {
      text-align: center;
      padding: 4rem 2rem;
    }

    .no-docs-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .no-documents h3 {
      color: #000000;
      margin-bottom: 1rem;
    }

    .no-documents p {
      color: #72444A;
      margin: 0;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #6763E1;
    }

    .page-btn {
      padding: 0.75rem 1.5rem;
      background: #6763E1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .page-btn:hover:not(:disabled) {
      background: #5AB156;
    }

    .page-btn:disabled {
      background: #DDDCF6;
      color: #72444A;
      cursor: not-allowed;
    }

    .page-info {
      color: #72444A;
      font-weight: 500;
    }

    .statistics-section {
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .statistics-section h3 {
      color: #000000;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 1.8rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: #DDDCF6;
      border-radius: 12px;
      border: 1px solid #6763E1;
    }

    .stat-icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 10px;
    }

    .stat-info h4 {
      color: #6763E1;
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }

    .stat-info p {
      color: #72444A;
      margin: 0;
      font-size: 0.9rem;
    }

    .document-preview-modal {
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

    .preview-content {
      background: #ffffff;
      border-radius: 15px;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      border-bottom: 2px solid #6763E1;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 15px 15px 0 0;
    }

    .preview-header h3 {
      margin: 0;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .close-preview-btn {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-preview-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    .preview-body {
      flex: 1;
      overflow-y: auto;
      padding: 2rem;
    }

    .document-meta-preview {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .meta-item {
      background: #DDDCF6;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      color: #72444A;
      font-weight: 500;
    }

    .document-content {
      line-height: 1.7;
      color: #000000;
    }

    .document-content h2 {
      color: #6763E1;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid #6763E1;
      padding-bottom: 0.5rem;
    }

    .document-content h3 {
      color: #5AB156;
      font-size: 1.4rem;
      margin: 1.5rem 0 1rem 0;
    }

    .document-content h4 {
      color: #72444A;
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem 0;
    }

    .document-content h5 {
      color: #6763E1;
      font-size: 1.1rem;
      margin: 1rem 0 0.5rem 0;
    }

    .document-content p {
      margin-bottom: 1rem;
      text-align: justify;
    }

    .document-content ul, .document-content ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
    }

    .document-content li {
      margin-bottom: 0.5rem;
    }

    .document-content strong {
      color: #6763E1;
      font-weight: 600;
    }

    .document-content em {
      color: #72444A;
      font-style: italic;
    }

    .preview-footer {
      padding: 2rem;
      border-top: 1px solid #DDDCF6;
      background: #DDDCF6;
      border-radius: 0 0 15px 15px;
      text-align: center;
    }

    .preview-footer .download-btn {
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

    .preview-footer .download-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    @media (max-width: 768px) {
      .documentation {
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

      .documentation-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .search-filters {
        flex-direction: column;
        align-items: stretch;
      }

      .search-box {
        min-width: auto;
      }

      .filter-options {
        justify-content: space-between;
      }

      .document-item {
        flex-direction: column;
        text-align: center;
      }

      .document-actions {
        flex-direction: row;
        justify-content: center;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .document-preview-modal {
        padding: 1rem;
      }

      .preview-header {
        padding: 1.5rem;
      }

      .preview-header h3 {
        font-size: 1.1rem;
      }

      .preview-body {
        padding: 1.5rem;
      }

      .document-content h2 {
        font-size: 1.5rem;
      }

      .document-content h3 {
        font-size: 1.2rem;
      }

      .preview-footer {
        padding: 1.5rem;
      }
    }
  `]
})
export class DocumentationComponent {
  selectedCategory = 'all';
  searchTerm = '';
  selectedYear = '';
  sortOrder = 'date-desc';
  currentPage = 1;
  itemsPerPage = 10;
  selectedDocumentForPreview: any = null;

  documentCategories = [
    {
      id: 'all',
      name: 'Tous les documents',
      description: 'Ensemble de la documentation municipale',
      icon: '📚'
    },
    {
      id: 'deliberations-municipal',
      name: 'Délibérations du Conseil Municipal',
      description: 'Décisions et votes du conseil municipal',
      icon: '🏛️'
    },
    {
      id: 'deliberations-supervision',
      name: 'Délibérations du Conseil de Supervision',
      description: 'Rapports et décisions du conseil de supervision',
      icon: '👥'
    },
    {
      id: 'documentation-technique',
      name: 'Documentation technique',
      description: 'Documents techniques et rapports d\'expertise',
      icon: '⚙️'
    },
    {
      id: 'planification',
      name: 'Documents de planification',
      description: 'Plans de développement et stratégies municipales',
      icon: '📋'
    },
    {
      id: 'appels-offres',
      name: 'Avis d\'appel d\'offre et Communiqués',
      description: 'Appels d\'offres publics et communications officielles',
      icon: '📢'
    }
  ];

  documents = [
    {
      id: '1',
      title: 'Communiqué final du 43ème Congrès de l\'AIMF',
      description: 'Rapport final du congrès de l\'Association Internationale des Maires Francophones tenu à Dangbo',
      category: 'appels-offres',
      type: 'PDF',
      size: '2.5 MB',
      date: '2025-06-15',
      year: '2025',
      content: `
        <h2>COMMUNIQUÉ FINAL DU 43ème CONGRÈS DE L'AIMF</h2>
        <h3>Dangbo, République du Bénin - 15 juin 2025</h3>
        
        <p><strong>Les maires francophones réunis à Dangbo adoptent la "Déclaration de Dangbo"</strong></p>
        
        <p>Du 12 au 15 juin 2025, la ville de Dangbo a accueilli le 43ème Congrès de l'Association Internationale des Maires Francophones (AIMF) sous le thème "Villes durables et résilientes : défis et opportunités pour les municipalités francophones".</p>
        
        <h4>Principales résolutions adoptées :</h4>
        <ul>
          <li>Renforcement de la coopération décentralisée entre villes francophones</li>
          <li>Mise en place d'un fonds de solidarité pour les projets environnementaux</li>
          <li>Création d'une plateforme d'échange de bonnes pratiques municipales</li>
          <li>Programme de formation des élus locaux francophones</li>
        </ul>
        
        <p>Plus de 150 maires et représentants de 45 pays ont participé à cet événement historique organisé par la municipalité de Dangbo.</p>
        
        <p><em>Pour plus d'informations, contactez le secrétariat de l'AIMF.</em></p>
      `
    },
    {
      id: '2',
      title: 'Déclaration de Dangbo',
      description: 'Déclaration officielle adoptée lors du congrès international des maires',
      category: 'appels-offres',
      type: 'PDF',
      size: '1.8 MB',
      date: '2025-06-14',
      year: '2025',
      content: `
        <h2>DÉCLARATION DE DANGBO</h2>
        <h3>Pour des villes francophones durables et résilientes</h3>
        
        <p><strong>Nous, maires et représentants des villes francophones, réunis à Dangbo les 12-15 juin 2025, déclarons :</strong></p>
        
        <h4>Article 1 - Engagement environnemental</h4>
        <p>Nous nous engageons à réduire de 50% nos émissions de gaz à effet de serre d'ici 2030 et à atteindre la neutralité carbone d'ici 2050.</p>
        
        <h4>Article 2 - Coopération renforcée</h4>
        <p>Nous renforçons nos liens de coopération décentralisée pour partager nos expériences et mutualiser nos ressources.</p>
        
        <h4>Article 3 - Innovation et numérique</h4>
        <p>Nous promouvons l'innovation et la transformation numérique au service de nos citoyens.</p>
        
        <h4>Article 4 - Jeunesse et formation</h4>
        <p>Nous investissons dans la formation de nos jeunes et leur participation à la vie démocratique locale.</p>
        
        <p><strong>Fait à Dangbo, le 15 juin 2025</strong></p>
      `
    },
    {
      id: '3',
      title: 'Délibération N°001/2025 - Budget Municipal',
      description: 'Adoption du budget primitif 2025 de la commune de Dangbo',
      category: 'deliberations-municipal',
      type: 'PDF',
      size: '3.2 MB',
      date: '2025-01-15',
      year: '2025',
      content: `
        <h2>DÉLIBÉRATION N°001/2025</h2>
        <h3>Conseil Municipal de Dangbo - Session du 15 janvier 2025</h3>
        
        <p><strong>Objet :</strong> Adoption du budget primitif 2025</p>
        
        <h4>Recettes prévisionnelles 2025 :</h4>
        <ul>
          <li>Fiscalité locale : 2 850 000 000 FCFA</li>
          <li>Dotations de l'État : 1 200 000 000 FCFA</li>
          <li>Subventions et partenariats : 450 000 000 FCFA</li>
          <li>Autres recettes : 300 000 000 FCFA</li>
        </ul>
        
        <h4>Dépenses prévisionnelles 2025 :</h4>
        <ul>
          <li>Fonctionnement : 2 100 000 000 FCFA</li>
          <li>Investissement : 2 700 000 000 FCFA</li>
        </ul>
        
        <p><strong>Total budget :</strong> 4 800 000 000 FCFA</p>
        
        <p>Le conseil municipal approuve à l'unanimité ce budget qui permettra de financer les grands projets de développement de la commune.</p>
        
        <p><em>Le Maire,<br>Monsieur [Nom du Maire]</em></p>
      `
    },
    {
      id: '4',
      title: 'Plan de Développement Communal 2025-2030',
      description: 'Stratégie de développement à moyen terme de la commune',
      category: 'planification',
      type: 'PDF',
      size: '5.7 MB',
      date: '2025-02-20',
      year: '2025',
      content: `
        <h2>PLAN DE DÉVELOPPEMENT COMMUNAL 2025-2030</h2>
        <h3>Vision stratégique pour Dangbo</h3>
        
        <h4>Vision :</h4>
        <p>"Faire de Dangbo une ville moderne, attractive et durable, référence en matière de développement local en Afrique de l'Ouest"</p>
        
        <h4>Axes stratégiques :</h4>
        
        <h5>1. Développement économique et touristique</h5>
        <ul>
          <li>Modernisation du port de pêche</li>
          <li>Développement du tourisme lacustre</li>
          <li>Création d'un marché moderne</li>
          <li>Promotion de l'artisanat local</li>
        </ul>
        
        <h5>2. Infrastructure et aménagement urbain</h5>
        <ul>
          <li>Réhabilitation de la voirie urbaine</li>
          <li>Extension du réseau d'éclairage public</li>
          <li>Amélioration de l'assainissement</li>
          <li>Construction d'équipements publics</li>
        </ul>
        
        <h5>3. Services sociaux et éducation</h5>
        <ul>
          <li>Construction de nouvelles écoles</li>
          <li>Amélioration des services de santé</li>
          <li>Programmes sociaux pour les plus vulnérables</li>
        </ul>
        
        <h5>4. Environnement et développement durable</h5>
        <ul>
          <li>Protection du lac Nokoué</li>
          <li>Programme de reboisement</li>
          <li>Gestion durable des déchets</li>
          <li>Énergies renouvelables</li>
        </ul>
        
        <p><strong>Budget total :</strong> 15 milliards FCFA sur 5 ans</p>
      `
    },
    {
      id: '5',
      title: 'Rapport technique - Réhabilitation du port',
      description: 'Étude technique pour la modernisation du port de pêche',
      category: 'documentation-technique',
      type: 'PDF',
      size: '4.1 MB',
      date: '2025-03-10',
      year: '2025',
      content: `
        <h2>RAPPORT TECHNIQUE</h2>
        <h3>Projet de réhabilitation du port de pêche de Dangbo</h3>
        
        <h4>1. Diagnostic de l'existant</h4>
        <p>Le port de pêche de Dangbo, construit dans les années 1980, présente des signes de vétusté importants :</p>
        <ul>
          <li>Dégradation des quais et pontons</li>
          <li>Insuffisance des équipements de conservation</li>
          <li>Manque d'espaces de stockage</li>
          <li>Problèmes d'assainissement</li>
        </ul>
        
        <h4>2. Objectifs du projet</h4>
        <ul>
          <li>Moderniser les infrastructures portuaires</li>
          <li>Améliorer les conditions de travail des pêcheurs</li>
          <li>Augmenter la capacité de traitement du poisson</li>
          <li>Créer de nouveaux emplois</li>
        </ul>
        
        <h4>3. Travaux prévus</h4>
        <ul>
          <li>Reconstruction de 500m de quais</li>
          <li>Installation de chambres froides (capacité 50 tonnes)</li>
          <li>Construction d'un marché au poisson moderne</li>
          <li>Aménagement d'aires de stationnement</li>
          <li>Mise en place d'un système d'assainissement</li>
        </ul>
        
        <h4>4. Budget et financement</h4>
        <p><strong>Coût total :</strong> 2,5 milliards FCFA</p>
        <p><strong>Financement :</strong></p>
        <ul>
          <li>État du Bénin : 40%</li>
          <li>Partenaires internationaux : 35%</li>
          <li>Commune de Dangbo : 25%</li>
        </ul>
        
        <h4>5. Planning</h4>
        <p><strong>Durée des travaux :</strong> 18 mois</p>
        <p><strong>Début des travaux :</strong> Septembre 2025</p>
        <p><strong>Livraison prévue :</strong> Mars 2027</p>
      `
    },
    {
      id: '6',
      title: 'Appel d\'offres - Construction marché moderne',
      description: 'Avis d\'appel d\'offres pour la construction du nouveau marché central',
      category: 'appels-offres',
      type: 'PDF',
      size: '2.9 MB',
      date: '2025-04-05',
      year: '2025',
      content: `
        <h2>AVIS D'APPEL D'OFFRES</h2>
        <h3>Construction d'un marché moderne à Dangbo</h3>
        
        <p><strong>Maître d'ouvrage :</strong> Commune de Dangbo</p>
        <p><strong>Objet :</strong> Construction d'un marché moderne au centre-ville</p>
        
        <h4>Description du projet :</h4>
        <ul>
          <li>Surface couverte : 5 000 m²</li>
          <li>300 boutiques et étals</li>
          <li>Espaces de stockage réfrigérés</li>
          <li>Parking de 200 places</li>
          <li>Système de gestion des déchets</li>
          <li>Panneaux solaires (100 kW)</li>
        </ul>
        
        <h4>Conditions de participation :</h4>
        <ul>
          <li>Entreprises de BTP agréées</li>
          <li>Chiffre d'affaires minimum : 500 millions FCFA</li>
          <li>Expérience en construction de marchés</li>
          <li>Certification qualité ISO 9001</li>
        </ul>
        
        <h4>Budget prévisionnel :</h4>
        <p><strong>1,8 milliard FCFA TTC</strong></p>
        
        <h4>Calendrier :</h4>
        <ul>
          <li>Date limite de dépôt des offres : 15 mai 2025</li>
          <li>Ouverture des plis : 20 mai 2025</li>
          <li>Attribution du marché : 30 juin 2025</li>
          <li>Début des travaux : Septembre 2025</li>
          <li>Durée des travaux : 24 mois</li>
        </ul>
        
        <p><strong>Contact :</strong><br>
        Direction des Marchés Publics<br>
        Mairie de Dangbo<br>
        Tél : +229 XX XX XX XX<br>
        Email : marches@dangbo.bj</p>
      `
    },
    {
      id: '7',
      title: 'Délibération Conseil de Supervision N°003/2025',
      description: 'Rapport de supervision des projets municipaux du premier trimestre',
      category: 'deliberations-supervision',
      type: 'PDF',
      size: '2.1 MB',
      date: '2025-04-30',
      year: '2025',
      content: `
        <h2>DÉLIBÉRATION N°003/2025</h2>
        <h3>Conseil de Supervision - Session du 30 avril 2025</h3>
        
        <p><strong>Objet :</strong> Rapport de supervision des projets municipaux - 1er trimestre 2025</p>
        
        <h4>Projets supervisés :</h4>
        
        <h5>1. Réhabilitation du port de pêche</h5>
        <ul>
          <li>Avancement : 15%</li>
          <li>Statut : Conforme au planning</li>
          <li>Budget consommé : 375 millions FCFA</li>
          <li>Observations : Travaux de terrassement terminés</li>
        </ul>
        
        <h5>2. Construction d'écoles primaires</h5>
        <ul>
          <li>Avancement : 45%</li>
          <li>Statut : Léger retard (2 semaines)</li>
          <li>Budget consommé : 180 millions FCFA</li>
          <li>Observations : Retard dû aux intempéries</li>
        </ul>
        
        <h5>3. Programme de reboisement</h5>
        <ul>
          <li>Avancement : 60%</li>
          <li>Statut : En avance sur le planning</li>
          <li>Budget consommé : 45 millions FCFA</li>
          <li>Observations : 3000 plants mis en terre</li>
        </ul>
        
        <h4>Recommandations :</h4>
        <ol>
          <li>Accélérer les travaux scolaires pour rattraper le retard</li>
          <li>Renforcer le suivi environnemental du port</li>
          <li>Poursuivre le programme de reboisement</li>
        </ol>
        
        <p><strong>Prochaine session :</strong> 31 juillet 2025</p>
        
        <p><em>Le Président du Conseil de Supervision</em></p>
      `
    },
    {
      id: '8',
      title: 'Étude environnementale - Reboisement lac Nokoué',
      description: 'Rapport d\'impact environnemental du projet de reboisement',
      category: 'documentation-technique',
      type: 'PDF',
      size: '6.3 MB',
      date: '2025-05-15',
      year: '2025',
      content: `
        <h2>ÉTUDE D'IMPACT ENVIRONNEMENTAL</h2>
        <h3>Projet de reboisement des berges du lac Nokoué</h3>
        
        <h4>1. Contexte et objectifs</h4>
        <p>Le lac Nokoué, écosystème vital pour Dangbo, subit une dégradation progressive due à :</p>
        <ul>
          <li>L'érosion des berges</li>
          <li>La pollution urbaine</li>
          <li>La surpêche</li>
          <li>Le changement climatique</li>
        </ul>
        
        <h4>2. Description du projet</h4>
        <ul>
          <li>Plantation de 5000 arbres sur 10 km de berges</li>
          <li>Espèces locales : palmiers, mangroves, acacias</li>
          <li>Création de pépinières communautaires</li>
          <li>Formation des populations riveraines</li>
        </ul>
        
        <h4>3. Impacts positifs attendus</h4>
        <ul>
          <li>Réduction de l'érosion de 70%</li>
          <li>Amélioration de la qualité de l'eau</li>
          <li>Restauration de la biodiversité</li>
          <li>Création d'emplois verts (50 emplois)</li>
          <li>Séquestration de 500 tonnes de CO2/an</li>
        </ul>
        
        <h4>4. Mesures d'accompagnement</h4>
        <ul>
          <li>Sensibilisation des communautés</li>
          <li>Mise en place de comités de gestion</li>
          <li>Suivi scientifique sur 10 ans</li>
          <li>Programme d'écotourisme</li>
        </ul>
        
        <h4>5. Budget et financement</h4>
        <p><strong>Coût total :</strong> 150 millions FCFA</p>
        <ul>
          <li>Fonds Vert Climat : 60%</li>
          <li>Commune de Dangbo : 25%</li>
          <li>Partenaires ONG : 15%</li>
        </ul>
        
        <h4>6. Planning</h4>
        <ul>
          <li>Phase 1 (Pépinières) : Juin-Août 2025</li>
          <li>Phase 2 (Plantation) : Septembre 2025-Mars 2026</li>
          <li>Phase 3 (Suivi) : Avril 2026-2035</li>
        </ul>
        
        <p><strong>Conclusion :</strong> Ce projet contribuera significativement à la restauration écologique du lac Nokoué et au développement durable de Dangbo.</p>
      `
    }
  ];

  filteredDocuments = [...this.documents];
  availableYears = ['2025', '2024', '2023', '2022'];

  featuredDocument = {
    title: 'Communiqué final du 43ème Congrès de l\'AIMF',
    description: 'Document phare du congrès international tenu à Dangbo'
  };

  documentStats = [
    { icon: '📄', value: '156', label: 'Documents totaux' },
    { icon: '📅', value: '24', label: 'Documents ce mois' },
    { icon: '📥', value: '1,247', label: 'Téléchargements' },
    { icon: '🔄', value: '8', label: 'Mises à jour récentes' }
  ];

  get totalPages(): number {
    return Math.ceil(this.filteredDocuments.length / this.itemsPerPage);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.currentPage = 1;
    this.filterDocuments();
  }

  getCurrentCategory() {
    return this.documentCategories.find(cat => cat.id === this.selectedCategory);
  }

  getDocumentsByCategory(categoryId: string) {
    if (categoryId === 'all') return this.documents;
    return this.documents.filter(doc => doc.category === categoryId);
  }

  filterDocuments() {
    let filtered = [...this.documents];

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(doc => doc.category === this.selectedCategory);
    }

    // Filter by search term
    if (this.searchTerm) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filter by year
    if (this.selectedYear) {
      filtered = filtered.filter(doc => doc.year === this.selectedYear);
    }

    this.filteredDocuments = filtered;
    this.sortDocuments();
  }

  sortDocuments() {
    switch (this.sortOrder) {
      case 'date-desc':
        this.filteredDocuments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'date-asc':
        this.filteredDocuments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'title-asc':
        this.filteredDocuments.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.filteredDocuments.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
  }

  getDocumentIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'pdf': return 'pdf';
      case 'doc': case 'docx': return 'doc';
      case 'xls': case 'xlsx': return 'excel';
      default: return 'pdf';
    }
  }

  getDocumentIconSymbol(type: string): string {
    switch (type.toLowerCase()) {
      case 'pdf': return '📄';
      case 'doc': case 'docx': return '📝';
      case 'xls': case 'xlsx': return '📊';
      default: return '📄';
    }
  }

  viewDocument(document: any) {
    this.selectedDocumentForPreview = document;
  }

  closePreview() {
    this.selectedDocumentForPreview = null;
  }

  downloadDocument(document: any) {
    console.log('Téléchargement du document:', document.title);
    // Ici on déclencherait le téléchargement
  }

  goToPage(page: number) {
    this.currentPage = page;
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