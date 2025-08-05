import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discover-dangbo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="discover-dangbo">
      <div class="container">
        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1>Dangbo</h1>
            <p class="hero-subtitle">
              Tout savoir sur la ville de Dangbo : son histoire, ses forces, opportunités et attractions touristiques.
            </p>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Ville de Dangbo">
          </div>
        </div>

        <!-- Historique Section -->
        <div class="section-block">
          <h2>Historique</h2>
          <div class="content-with-image">
            <div class="text-content">
              <p>
                Dangbo fut créée en 1930 sur l'initiative du Roi Ganhin illustre roi d'Abomey. Selon l'une des légendes les plus fiables et chroniques, signalant de nombreux témoins oculaires encore vivants, cette ville a joué dans le trafic des esclaves.
              </p>
              <p>
                Au fil du temps jadis, Dangbo était développé à partir de quelques villages de pêcheurs situés à l'Est et à l'Ouest de la lagune. En 1960, le territoire de la ville cédé à la France par le Roi d'Abomey, ce qui mit fin pour effet l'accélération de son développement.
              </p>
            </div>
            <div class="image-content">
              <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Artisanat traditionnel de Dangbo">
            </div>
          </div>
          
          <div class="historical-details">
            <p>
              À partir du règne original des Toffas, la ville de Dangbo était progressivement développée. Aujourd'hui, elle compte plusieurs quartiers qui se sont développés au fil des années. Dangbo, située sur le Lac Nokoué, est devenue l'une des principales destinations touristiques du Bénin avec ses populations Guin's, venues de Grand-Popo et d'Agoué pour peupler cette contrée au bord du Lac Nokoué. De même, inversement dirigée la terre des eaux.
            </p>
            <p>
              Dangbo est devenu une ville touristique par excellence grâce à sa vaste région urbaine en raison de sa proximité avec le Lac Nokoué et ses nombreuses attractions. Cette ville désignée aujourd'hui par le « Grand Nokoué ».
            </p>
          </div>
        </div>

        <!-- Économie Section -->
        <div class="section-block">
          <h2>Économie</h2>
          <div class="content-with-image reverse">
            <div class="text-content">
              <h3>Situation économique</h3>
              <p>
                Les activités économiques exercées dans la ville de Dangbo touchent surtout les secteurs tertiaire, la pêche et le commerce et les services qui sont exploités par différents acteurs : manufacturiers. Quant aux activités du secteur primaire, elles concernent surtout de la production qui pratique le maraîchage, soit 80% des actifs agricoles. L'artisanat et le commerce constituent la base de l'économie locale de la municipalité, au fait de la présence de grands opérateurs économiques.
              </p>
            </div>
            <div class="image-content">
              <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Activités économiques de Dangbo">
            </div>
          </div>
        </div>

        <!-- Potentialité Section -->
        <div class="section-block potentiality-section">
          <h2>Potentialité</h2>
          <div class="potentiality-grid">
            <div class="potentiality-category">
              <h3>Forces</h3>
              <ul>
                <li>• Existence du marché international Dantokpa, des marchés secondaires et des supermarchés, restaurants et magasins de stockage.</li>
                <li>• Forte demande de produits et services.</li>
                <li>• Présence d'institutions financières qui facilitent l'accès des produits des premières nécessités.</li>
                <li>• Existence d'un commerce de métiers.</li>
                <li>• Existence de mécanismes d'appui pour la formation et le perfectionnement des artisans.</li>
                <li>• Proximité des villes à grandes potentialités touristiques.</li>
                <li>• Présence d'un port de pêche.</li>
                <li>• Disponibilité et bonne répartition géographique des hôtels et motels de différents standings.</li>
              </ul>
            </div>
            <div class="potentiality-category">
              <h3>Opportunités</h3>
              <ul>
                <li>• Développement du tourisme lacustre et culturel</li>
                <li>• Valorisation des ressources halieutiques</li>
                <li>• Promotion de l'artisanat local</li>
                <li>• Développement de l'écotourisme</li>
                <li>• Création d'infrastructures touristiques modernes</li>
                <li>• Partenariats avec les acteurs du secteur privé</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Attractions touristiques Section -->
        <div class="section-block">
          <h2>Attractions touristiques de Dangbo</h2>
          <div class="attractions-grid">
            <div class="attraction-card" *ngFor="let attraction of attractions">
              <div class="attraction-image">
                <img [src]="attraction.image" [alt]="attraction.name">
                <div class="attraction-overlay">
                  <h3>{{ attraction.name }}</h3>
                </div>
              </div>
              <div class="attraction-content">
                <p>{{ attraction.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .discover-dangbo {
      padding: 2rem 0;
      background: linear-gradient(180deg, #DDDCF6 0%, #ffffff 50%, #DDDCF6 100%);
      min-height: 100vh;
    }

    .hero-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin-bottom: 4rem;
      padding: 3rem 0;
      background: linear-gradient(135deg, #6763E1 0%, #5AB156 100%);
      border-radius: 20px;
      color: white;
      padding: 3rem;
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

    .section-block {
      margin-bottom: 4rem;
      background: #ffffff;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
    }

    .section-block h2 {
      font-size: 2.5rem;
      color: #000000;
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 1rem;
    }

    .section-block h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      border-radius: 2px;
    }

    .content-with-image {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
      margin-bottom: 2rem;
    }

    .content-with-image.reverse {
      grid-template-columns: 1fr 2fr;
    }

    .content-with-image.reverse .text-content {
      order: 2;
    }

    .content-with-image.reverse .image-content {
      order: 1;
    }

    .text-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #000000;
      margin-bottom: 1.5rem;
      text-align: justify;
    }

    .text-content h3 {
      font-size: 1.5rem;
      color: #6763E1;
      margin-bottom: 1rem;
    }

    .image-content {
      position: relative;
    }

    .image-content img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .historical-details {
      background: #DDDCF6;
      padding: 2rem;
      border-radius: 15px;
      border-left: 5px solid #6763E1;
    }

    .historical-details p {
      font-size: 1rem;
      line-height: 1.7;
      color: #000000;
      margin-bottom: 1rem;
      text-align: justify;
    }

    .potentiality-section {
      background: linear-gradient(135deg, #DDDCF6 0%, #ffffff 100%);
    }

    .potentiality-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .potentiality-category {
      background: #ffffff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      border: 2px solid #6763E1;
    }

    .potentiality-category h3 {
      font-size: 1.5rem;
      color: #6763E1;
      margin-bottom: 1.5rem;
      text-align: center;
      padding: 1rem;
      background: linear-gradient(135deg, #6763E1, #5AB156);
      color: white;
      border-radius: 10px;
    }

    .potentiality-category ul {
      list-style: none;
      padding: 0;
    }

    .potentiality-category li {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #000000;
      margin-bottom: 1rem;
      padding-left: 1rem;
      position: relative;
    }

    .potentiality-category li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #5AB156;
      font-weight: bold;
    }

    .attractions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .attraction-card {
      background: #ffffff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid #6763E1;
      transition: all 0.3s ease;
    }

    .attraction-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .attraction-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .attraction-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .attraction-card:hover .attraction-image img {
      transform: scale(1.05);
    }

    .attraction-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 2rem 1.5rem 1.5rem;
    }

    .attraction-overlay h3 {
      font-size: 1.2rem;
      margin: 0;
      font-weight: 600;
    }

    .attraction-content {
      padding: 1.5rem;
    }

    .attraction-content p {
      color: #72444A;
      line-height: 1.6;
      margin: 0;
      font-size: 0.95rem;
    }

    @media (max-width: 768px) {
      .discover-dangbo {
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

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .section-block {
        padding: 2rem;
        margin-bottom: 2rem;
      }

      .section-block h2 {
        font-size: 2rem;
      }

      .content-with-image,
      .content-with-image.reverse {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .content-with-image.reverse .text-content,
      .content-with-image.reverse .image-content {
        order: unset;
      }

      .potentiality-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .attractions-grid {
        grid-template-columns: 1fr;
      }

      .historical-details {
        padding: 1.5rem;
      }
    }
  `]
})
export class DiscoverDangboComponent {
  attractions = [
    {
      name: 'Le Monument aux Dévoués',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monument historique dédié aux héros de la ville de Dangbo.'
    },
    {
      name: 'La Statue de l\'Amazone',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Statue emblématique représentant les guerrières amazones du royaume du Dahomey.'
    },
    {
      name: 'La Statue de Biokou',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monument dédié à une figure historique importante de la région.'
    },
    {
      name: 'Le Port de Dangbo',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Port de pêche traditionnel sur le Lac Nokoué, centre d\'activité économique.'
    },
    {
      name: 'La Mosquée',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Lieu de culte important de la communauté musulmane de Dangbo.'
    },
    {
      name: 'Marché Dantokpa',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'L\'un des plus grands marchés d\'Afrique de l\'Ouest, centre commercial majeur.'
    }
  ];
}