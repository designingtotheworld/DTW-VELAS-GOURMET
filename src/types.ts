export interface RecipeItem {
  id: string;
  category: 'salada' | 'dulce';
  title: string;
  subtitle: string;
  description: string;
  prepTime: string;
  image: string;
  highlights: string[];
  ingredients: string[];
  instructions: string[];
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  value: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
