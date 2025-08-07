import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="/" class="breadcrumb-link">Accueil</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">Contact</span>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
          <h1>{{ getActiveTabTitle() }}</h1>
          <p class="hero-subtitle">{{ getActiveTabSubtitle() }}</p>
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
          <button 
            *ngFor="let tab of tabs" 
            class="tab-btn"
            [class.active]="activeTab === tab.id"
            (click)="setActiveTab(tab.id)">
            <span class="tab-icon">{{ tab.icon }}</span>
            <span>{{ tab.name }}</span>
          </button>
        </div>

        <!-- Main Content Grid -->
        <div class="content-grid">
          <!-- Left Column: Form -->
          <div class="form-section">
            <div class="form-card">
              <h3>{{ getActiveTabFormTitle() }}</h3>
              <p class="form-description">{{ getActiveTabFormDescription() }}</p>
              
              <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <!-- Personal Information -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="nom">Nom *</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      [(ngModel)]="formData.nom" 
                      required 
                      class="form-input">
                  </div>
                  <div class="form-group">
                    <label for="prenom">Prénom(s) *</label>
                    <input 
                      type="text" 
                      id="prenom" 
                      name="prenom" 
                      [(ngModel)]="formData.prenom" 
                      required 
                      class="form-input">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      [(ngModel)]="formData.email" 
                      required 
                      class="form-input">
                  </div>
                  <div class="form-group">
                    <label for="telephone">Téléphone</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      name="telephone" 
                      [(ngModel)]="formData.telephone" 
                      class="form-input">
                  </div>
                </div>

                <!-- Location -->
                <div class="form-group">
                  <label for="lieu">Lieu de résidence</label>
                  <input 
                    type="text" 
                    id="lieu" 
                    name="lieu" 
                    [(ngModel)]="formData.lieu" 
                    class="form-input">
                </div>

                <!-- Specific fields based on active tab -->
                <div *ngIf="activeTab === 'signalez'" class="form-group">
                  <label for="type-probleme">Type de problème *</label>
                  <select 
                    id="type-probleme" 
                    name="typeProbleme" 
                    [(ngModel)]="formData.typeProbleme" 
                    required 
                    class="form-select">
                    <option value="">Sélectionnez un type</option>
                    <option value="voirie">Voirie et routes</option>
                    <option value="eclairage">Éclairage public</option>
                    <option value="assainissement">Assainissement</option>
                    <option value="dechets">Gestion des déchets</option>
                    <option value="securite">Sécurité publique</option>
                    <option value="environnement">Environnement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div *ngIf="activeTab === 'signalez'" class="form-group">
                  <label for="localisation">Localisation du problème *</label>
                  <input 
                    type="text" 
                    id="localisation" 
                    name="localisation" 
                    [(ngModel)]="formData.localisation" 
                    required 
                    class="form-input"
                    placeholder="Adresse précise ou point de repère">
                </div>

                <div *ngIf="activeTab === 'maire'" class="form-group">
                  <label for="objet">Objet de votre message *</label>
                  <input 
                    type="text" 
                    id="objet" 
                    name="objet" 
                    [(ngModel)]="formData.objet" 
                    required 
                    class="form-input"
                    placeholder="Résumé de votre demande">
                </div>

                <div *ngIf="activeTab === 'secretariat'" class="form-group">
                  <label for="service">Service concerné</label>
                  <select 
                    id="service" 
                    name="service" 
                    [(ngModel)]="formData.service" 
                    class="form-select">
                    <option value="">Sélectionnez un service</option>
                    <option value="etat-civil">État civil</option>
                    <option value="urbanisme">Urbanisme</option>
                    <option value="finances">Finances</option>
                    <option value="ressources-humaines">Ressources humaines</option>
                    <option value="technique">Service technique</option>
                    <option value="social">Affaires sociales</option>
                  </select>
                </div>

                <!-- Message -->
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="formData.message" 
                    required 
                    rows="6" 
                    class="form-textarea"
                    [placeholder]="getMessagePlaceholder()"></textarea>
                </div>

                <!-- File Upload for Signalez -->
                <div *ngIf="activeTab === 'signalez'" class="form-group">
                  <label for="photo">Photo du problème (optionnel)</label>
                  <input 
                    type="file" 
                    id="photo" 
                    name="photo" 
                    accept="image/*" 
                    class="form-file">
                  <small class="form-help">Formats acceptés: JPG, PNG, GIF (max 5MB)</small>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="submit-btn"
                  [disabled]="!contactForm.form.valid">
                  {{ getSubmitButtonText() }}
                </button>
              </form>
            </div>
          </div>

          <!-- Right Column: Contact Info -->
          <div class="contact-info-section">
            <div class="contact-card">
              <h3>Nos contacts</h3>
              
              <div class="contact-items">
                <div class="contact-item">
                  <div class="contact-icon">📞</div>
                  <div class="contact-details">
                    <strong>Téléphone</strong>
                    <p>+229 XX XX XX XX</p>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-icon">✉️</div>
                  <div class="contact-details">
                    <strong>Email</strong>
                    <p>contact&#64;dangbo.bj</p>
                    <p>mairie.dangbo&#64;gmail.com</p>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div class="contact-details">
                    <strong>Adresse</strong>
                    <p>Hôtel de Ville de Dangbo</p>
                    <p>Place de l'Indépendance</p>
                    <p>Dangbo - République du Bénin</p>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-icon">🕒</div>
                  <div class="contact-details">
                    <strong>Horaires d'ouverture</strong>
                    <p>Lundi - Vendredi : 8h00 - 16h00</p>
                    <p>Samedi : 8h00 - 12h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              <!-- Response Time Info -->
              <div class="response-info">
                <h4>Délais de réponse</h4>
                <div class="response-times">
                  <div class="response-item" *ngIf="activeTab === 'signalez'">
                    <span class="response-icon">⚡</span>
                    <span>Signalement : 24-48h</span>
                  </div>
                  <div class="response-item" *ngIf="activeTab === 'maire'">
                    <span class="response-icon">👨‍💼</span>
                    <span>Message au Maire : 3-5 jours</span>
                  </div>
                  <div class="response-item" *ngIf="activeTab === 'secretariat'">
                    <span class="response-icon">📋</span>
                    <span>Secrétariat : 1-2 jours</span>
                  </div>
                </div>
              </div>

              <!-- Emergency Contact -->
              <div class="emergency-contact">
                <h4>Urgences</h4>
                <p>Pour les urgences, contactez directement :</p>
                <div class="emergency-numbers">
                  <div class="emergency-item">
                    <span class="emergency-icon">🚨</span>
                    <span>Police : 117</span>
                  </div>
                  <div class="emergency-item">
                    <span class="emergency-icon">🚑</span>
                    <span>Urgences médicales : 118</span>
                  </div>
                  <div class="emergency-item">
                    <span class="emergency-icon">🚒</span>
                    <span>Pompiers : 119</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div class="success-message" *ngIf="showSuccessMessage">
          <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>Message envoyé avec succès !</h3>
            <p>Nous avons bien reçu votre {{ getMessageType() }}. Nous vous répondrons dans les meilleurs délais.</p>
            <button class="close-success" (click)="closeSuccessMessage()">Fermer</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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
      margin-bottom: 3rem;
      padding: 3rem 2rem;
      background: linear-gradient(135deg, #6763E1 0%, #5AB156 100%);
      border-radius: 20px;
      color: white;
    }

    .hero-section h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.2rem;
      opacity: 0.95;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .tab-navigation {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .tab-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background: #ffffff;
      border: 2px solid #6763E1;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      color: #6763E1;
      font-size: 1rem;
    }

    .tab-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.2);
    }

    .tab-btn.active {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-color: transparent;
    }

    .tab-icon {
      font-size: 1.2rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .form-section {
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .form-card {
      padding: 2.5rem;
    }

    .form-card h3 {
      color: #000000;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .form-description {
      color: #72444A;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: #000000;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .form-input, .form-select, .form-textarea {
      padding: 1rem;
      border: 2px solid #DDDCF6;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #ffffff;
      color: #000000;
    }

    .form-input:focus, .form-select:focus, .form-textarea:focus {
      outline: none;
      border-color: #6763E1;
      box-shadow: 0 0 0 3px rgba(103, 99, 225, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-file {
      padding: 0.75rem;
      border: 2px dashed #DDDCF6;
      border-radius: 8px;
      background: #ffffff;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-file:hover {
      border-color: #6763E1;
      background: #DDDCF6;
    }

    .form-help {
      color: #72444A;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }

    .submit-btn {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 1.25rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(103, 99, 225, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .contact-card {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .contact-card h3 {
      color: #000000;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .contact-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #DDDCF6;
      border-radius: 10px;
      flex-shrink: 0;
    }

    .contact-details strong {
      color: #6763E1;
      display: block;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    .contact-details p {
      color: #72444A;
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .response-info {
      background: #DDDCF6;
      padding: 1.5rem;
      border-radius: 10px;
      margin-bottom: 2rem;
    }

    .response-info h4 {
      color: #6763E1;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .response-times {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .response-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #000000;
      font-size: 0.9rem;
    }

    .response-icon {
      font-size: 1.1rem;
    }

    .emergency-contact {
      background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
      padding: 1.5rem;
      border-radius: 10px;
      color: white;
    }

    .emergency-contact h4 {
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .emergency-contact p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .emergency-numbers {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .emergency-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .emergency-icon {
      font-size: 1.1rem;
    }

    .success-message {
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

    .success-content {
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      text-align: center;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .success-content h3 {
      color: #5AB156;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .success-content p {
      color: #72444A;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .close-success {
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .close-success:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(103, 99, 225, 0.3);
    }

    &#64;media (max-width: 768px) {
      .contact {
        padding: 1rem 0;
      }

      .hero-section {
        padding: 2rem 1rem;
      }

      .hero-section h1 {
        font-size: 2.2rem;
      }

      .tab-navigation {
        flex-direction: column;
        align-items: center;
      }

      .tab-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-card {
        padding: 1.5rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .contact-card {
        padding: 1.5rem;
      }

      .success-content {
        padding: 2rem;
        margin: 1rem;
      }
    }
  `]
})
export class ContactComponent {
  activeTab = 'signalez';
  showSuccessMessage = false;

  tabs = [
    {
      id: 'signalez',
      name: 'Signalez un problème',
      icon: '🚨'
    },
    {
      id: 'maire',
      name: 'Écrire au Maire',
      icon: '👨‍💼'
    },
    {
      id: 'secretariat',
      name: 'Écrire au Secrétariat',
      icon: '📋'
    }
  ];

  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    lieu: '',
    typeProbleme: '',
    localisation: '',
    objet: '',
    service: '',
    message: ''
  };

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.resetForm();
  }

  getActiveTabTitle(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Signalez un problème';
      case 'maire':
        return 'Écrire au Maire';
      case 'secretariat':
        return 'Écrire au Secrétariat administratif';
      default:
        return 'Contact';
    }
  }

  getActiveTabSubtitle(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Vous avez remarqué un problème dans votre quartier ? Signalez-le nous pour que nous puissions intervenir rapidement.';
      case 'maire':
        return 'Adressez-vous directement au Maire de Dangbo pour vos préoccupations importantes et vos suggestions.';
      case 'secretariat':
        return 'Contactez le secrétariat administratif pour vos démarches administratives et demandes d\'information.';
      default:
        return '';
    }
  }

  getActiveTabFormTitle(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Avez-vous remarqué une anomalie ?';
      case 'maire':
        return 'Votre message au Maire';
      case 'secretariat':
        return 'Votre demande administrative';
      default:
        return '';
    }
  }

  getActiveTabFormDescription(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Décrivez le problème que vous avez observé. Nous interviendrons dans les plus brefs délais.';
      case 'maire':
        return 'Exprimez vos préoccupations, suggestions ou félicitations directement au Maire.';
      case 'secretariat':
        return 'Formulez votre demande administrative. Nous vous répondrons rapidement.';
      default:
        return '';
    }
  }

  getMessagePlaceholder(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Décrivez le problème en détail : nature, gravité, impact sur les citoyens...';
      case 'maire':
        return 'Votre message au Maire de Dangbo...';
      case 'secretariat':
        return 'Décrivez votre demande administrative...';
      default:
        return 'Votre message...';
    }
  }

  getSubmitButtonText(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'Signaler le problème';
      case 'maire':
        return 'Envoyer au Maire';
      case 'secretariat':
        return 'Envoyer la demande';
      default:
        return 'Envoyer';
    }
  }

  getMessageType(): string {
    switch (this.activeTab) {
      case 'signalez':
        return 'signalement';
      case 'maire':
        return 'message au Maire';
      case 'secretariat':
        return 'demande administrative';
      default:
        return 'message';
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.showSuccessMessage = true;
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      lieu: '',
      typeProbleme: '',
      localisation: '',
      objet: '',
      service: '',
      message: ''
    };
  }
}