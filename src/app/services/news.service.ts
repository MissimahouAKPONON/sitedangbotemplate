import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NEWS_CATEGORIES } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Nouvelle session du conseil municipal',
      excerpt: 'Le conseil municipal se réunit mercredi 25 juin pour examiner les projets d\'aménagement urbain.',
      content: 'Le conseil municipal de Dangbo se réunira en session ordinaire le mercredi 25 juin 2025 à 14h30 en salle du conseil. À l\'ordre du jour : l\'examen des projets d\'aménagement urbain, le vote du budget supplémentaire et la présentation du plan de développement touristique. Cette session sera ouverte au public et retransmise en direct sur les réseaux sociaux de la mairie.',
      author: 'Service Communication',
      date: '2025-06-20',
      category: NEWS_CATEGORIES[0], // Municipal
      tags: ['conseil', 'municipal', 'aménagement'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      title: 'Lancement des travaux de réhabilitation du port',
      excerpt: 'Les travaux de modernisation du port de pêche débuteront le mois prochain.',
      content: 'La municipalité de Dangbo annonce le lancement officiel des travaux de réhabilitation du port de pêche. Ce projet d\'envergure, financé à hauteur de 2,5 milliards de FCFA, permettra de moderniser les infrastructures portuaires et d\'améliorer les conditions de travail des pêcheurs. Les travaux, qui dureront 18 mois, incluent la construction de nouveaux quais, l\'installation d\'équipements modernes de conservation du poisson et l\'aménagement d\'espaces de vente.',
      author: 'Direction des Travaux',
      date: '2025-06-18',
      category: NEWS_CATEGORIES[1], // Projets
      tags: ['port', 'pêche', 'travaux', 'modernisation'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      title: 'Festival culturel de Dangbo 2025',
      excerpt: 'La 5ème édition du festival culturel aura lieu du 15 au 17 août prochain.',
      content: 'La mairie de Dangbo est fière d\'annoncer la tenue de la 5ème édition du Festival culturel de Dangbo du 15 au 17 août 2025. Cet événement majeur mettra à l\'honneur les traditions locales, l\'artisanat et la gastronomie de la région. Au programme : spectacles de danse traditionnelle, expositions d\'art local, concours culinaire et marché artisanal. L\'entrée est gratuite pour tous les événements.',
      author: 'Service Culturel',
      date: '2025-06-15',
      category: NEWS_CATEGORIES[2], // Culture
      tags: ['festival', 'culture', 'tradition', 'artisanat'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      title: 'Programme d\'aide aux familles vulnérables',
      excerpt: 'Lancement d\'un nouveau programme d\'assistance sociale pour les familles en difficulté.',
      content: 'La municipalité lance un programme d\'aide destiné aux familles vulnérables de Dangbo. Ce programme comprend une aide alimentaire mensuelle, un soutien scolaire pour les enfants et un accompagnement dans les démarches administratives. Les familles intéressées peuvent se rendre au service social de la mairie pour constituer leur dossier. Plus de 200 familles devraient bénéficier de ce programme dans sa première phase.',
      author: 'Service Social',
      date: '2025-06-12',
      category: NEWS_CATEGORIES[3], // Social
      tags: ['aide', 'social', 'familles', 'solidarité'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      title: 'Campagne de reboisement sur les berges du lac',
      excerpt: 'Initiative écologique pour protéger l\'écosystème du lac Nokoué.',
      content: 'Dans le cadre de sa politique environnementale, la mairie de Dangbo lance une grande campagne de reboisement des berges du lac Nokoué. Cette initiative vise à lutter contre l\'érosion et à préserver la biodiversité locale. 5000 plants d\'espèces locales seront mis en terre avec la participation des écoles et des associations. La campagne débutera le 1er juillet et se poursuivra pendant la saison des pluies.',
      author: 'Service Environnement',
      date: '2025-06-10',
      category: NEWS_CATEGORIES[4], // Environnement
      tags: ['reboisement', 'environnement', 'lac', 'biodiversité'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      title: 'Création d\'un marché moderne au centre-ville',
      excerpt: 'Un nouveau marché moderne sera construit pour dynamiser l\'économie locale.',
      content: 'La municipalité annonce la construction d\'un marché moderne au cœur de Dangbo. Ce projet de 1,8 milliard de FCFA comprendra 300 boutiques, des espaces de stockage réfrigérés et un parking. Le marché sera équipé de panneaux solaires et d\'un système de gestion des déchets moderne. Les travaux débuteront en septembre 2025 pour une livraison prévue en mars 2027.',
      author: 'Direction du Commerce',
      date: '2025-06-08',
      category: NEWS_CATEGORIES[5], // Économie
      tags: ['marché', 'commerce', 'économie', 'modernisation'],
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  getCategories(): NewsCategory[] {
    return NEWS_CATEGORIES;
  }

  getAllNews(): NewsItem[] {
    return this.newsItems;
  }

  getRecentNews(limit: number = 3): NewsItem[] {
    return this.newsItems
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  getNewsByCategory(categoryId: string): NewsItem[] {
    return this.newsItems.filter(news => news.category.id === categoryId);
  }

  getNewsById(id: string): NewsItem | undefined {
    return this.newsItems.find(news => news.id === id);
  }
}