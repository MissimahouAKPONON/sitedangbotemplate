import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NEWS_CATEGORIES } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Cotonou: première séance de reddition de comptes, l\'assainissement et les services numériques au centre des priorités',
      excerpt: 'Le maire présente les réalisations de son premier mandat et les perspectives d\'avenir pour la ville.',
      content: 'Lors de cette première séance de reddition de comptes, le maire a présenté un bilan détaillé des actions menées depuis le début de son mandat. L\'accent a été mis sur les progrès significatifs en matière d\'assainissement urbain et la modernisation des services municipaux grâce au numérique...',
      category: NEWS_CATEGORIES[0],
      date: '2025-06-25',
      author: 'Service Communication',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['reddition de comptes', 'assainissement', 'numérique'],
      featured: true
    },
    {
      id: '2',
      title: 'Lancement du projet de rénovation urbaine du centre-ville',
      excerpt: 'Un investissement majeur pour moderniser l\'infrastructure et améliorer la qualité de vie des habitants.',
      content: 'Le projet de rénovation urbaine du centre-ville représente un investissement de plusieurs millions d\'euros. Il comprend la réfection des voiries, l\'amélioration de l\'éclairage public, la création d\'espaces verts et la modernisation des équipements publics...',
      category: NEWS_CATEGORIES[1],
      date: '2025-06-20',
      author: 'Direction de l\'Urbanisme',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['rénovation', 'centre-ville', 'infrastructure'],
      featured: true
    },
    {
      id: '3',
      title: 'Nouvelle plateforme de services municipaux en ligne',
      excerpt: 'Simplifiez vos démarches administratives grâce à notre portail numérique innovant.',
      content: 'La nouvelle plateforme de services en ligne permet aux citoyens d\'effectuer leurs démarches administratives 24h/24. État civil, urbanisme, taxes locales, tout est désormais accessible depuis votre domicile...',
      category: NEWS_CATEGORIES[2],
      date: '2025-06-18',
      author: 'Direction des Services Numériques',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['services en ligne', 'numérique', 'démarches'],
      featured: false
    },
    {
      id: '4',
      title: 'Festival des Arts et Cultures locales - Édition 2025',
      excerpt: 'Découvrez la richesse culturelle de notre région lors de ce festival exceptionnel.',
      content: 'Le Festival des Arts et Cultures locales revient pour sa 10ème édition avec un programme riche en spectacles, expositions et ateliers. Trois jours de festivités pour célébrer notre patrimoine culturel...',
      category: NEWS_CATEGORIES[3],
      date: '2025-06-15',
      author: 'Service Culturel',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['festival', 'culture', 'arts'],
      featured: false
    },
    {
      id: '5',
      title: 'Programme de plantation d\'arbres dans les quartiers',
      excerpt: 'Initiative écologique pour améliorer la qualité de l\'air et embellir nos espaces urbains.',
      content: 'Dans le cadre de notre engagement environnemental, la municipalité lance un vaste programme de plantation d\'arbres. 500 nouveaux arbres seront plantés dans différents quartiers de la ville...',
      category: NEWS_CATEGORIES[4],
      date: '2025-06-12',
      author: 'Service Environnement',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['environnement', 'plantation', 'écologie'],
      featured: false
    },
    {
      id: '6',
      title: 'Nouveau centre d\'aide sociale pour les familles',
      excerpt: 'Ouverture d\'un centre dédié à l\'accompagnement des familles en difficulté.',
      content: 'Le nouveau centre d\'aide sociale ouvre ses portes pour offrir un accompagnement personnalisé aux familles en difficulté. Services de conseil, aide alimentaire et soutien administratif sont proposés...',
      category: NEWS_CATEGORIES[5],
      date: '2025-06-10',
      author: 'Action Sociale',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['aide sociale', 'familles', 'accompagnement'],
      featured: false
    }
  ];

  getAllNews(): NewsItem[] {
    return this.newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getNewsByCategory(categoryId: string): NewsItem[] {
    return this.newsItems
      .filter(news => news.category.id === categoryId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getFeaturedNews(): NewsItem[] {
    return this.newsItems
      .filter(news => news.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getNewsById(id: string): NewsItem | undefined {
    return this.newsItems.find(news => news.id === id);
  }

  getCategories(): NewsCategory[] {
    return NEWS_CATEGORIES;
  }

  getRecentNews(limit: number = 3): NewsItem[] {
    return this.getAllNews().slice(0, limit);
  }
}