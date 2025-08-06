export interface NewsCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: NewsCategory;
  tags: string[];
  imageUrl?: string;
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  {
    id: 'municipal',
    name: 'Municipal',
    description: 'Actualités de la mairie et des services municipaux',
    icon: '🏛️',
    color: '#6763E1'
  },
  {
    id: 'projets',
    name: 'Projets',
    description: 'Grands projets et aménagements urbains',
    icon: '🏗️',
    color: '#5AB156'
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Événements culturels et patrimoine',
    icon: '🎭',
    color: '#FF6B6B'
  },
  {
    id: 'social',
    name: 'Social',
    description: 'Actions sociales et solidarité',
    icon: '🤝',
    color: '#4ECDC4'
  },
  {
    id: 'environnement',
    name: 'Environnement',
    description: 'Écologie et développement durable',
    icon: '🌱',
    color: '#45B7D1'
  },
  {
    id: 'economie',
    name: 'Économie',
    description: 'Développement économique local',
    icon: '💼',
    color: '#96CEB4'
  }
];