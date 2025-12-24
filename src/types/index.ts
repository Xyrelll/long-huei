export interface Article {
  id: number;
  title: string;
  image: string;
  views?: number;
  date?: string;
  link: string;
}

export interface QA {
  question: string;
  answer: string;
}

export interface FAQItem {
  number: string;
  title: string;
  qas: QA[];
  additionalQAs?: QA[];
  listItems?: string[];
  link: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  link: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

