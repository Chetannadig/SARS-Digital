export interface FeatureData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  badges: string[];
}

export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company: string;
  package: string;
  hikePercentage: string;
  image: string;
  quote: string;
  rating: number;
}

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}