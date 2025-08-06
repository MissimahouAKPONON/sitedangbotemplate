export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  date: string;
  author: string;
  imageUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  {
    id: 'maire',
    name: 'Actualités du Maire',
    icon: '👨‍💼',
    color: '#6763E1',
    description: 'Communications et annonces officielles du maire'
  },
  {
    id: 'projets',
    name: 'Projets Urbains',
    icon: '🏗️',
    color: '#5AB156',
    description: 'Développement et aménagement de la ville'
  },
  {
    id: 'services',
    name: 'Services Municipaux',
    icon: '🏛️',
    color: '#72444A',
    description: 'Informations sur les services aux citoyens'
  },
  {
    id: 'culture',
    name: 'Culture & Événements',
    icon: '🎭',
    color: '#6763E1',
    description: 'Activités culturelles et événements communautaires'
  },
  {
    id: 'environnement',
    name: 'Environnement',
    icon: '🌱',
    color: '#5AB156',
    description: 'Initiatives écologiques et développement durable'
  },
  {
    id: 'social',
    name: 'Action Sociale',
    icon: '🤝',
    color: '#72444A',
    description: 'Programmes sociaux et aide aux citoyens'
  }
];