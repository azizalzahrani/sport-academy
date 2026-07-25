export type PageTab = 
  | 'home'
  | 'about'
  | 'programs'
  | 'age-groups'
  | 'coaches'
  | 'facilities'
  | 'schedule'
  | 'camps'
  | 'parent-hub'
  | 'contact'
  | 'legal';

export type SportType = 'all' | 'football' | 'basketball' | 'swimming' | 'athletics' | 'fitness' | 'girls';

export interface Program {
  id: string;
  title: string;
  sport: SportType;
  ageRange: string;
  tagline: string;
  description: string;
  image: string;
  skillFocus: string[];
  scheduleSummary: string;
  priceMonthly: number;
  featured?: boolean;
}

export interface AgeGroup {
  id: string;
  title: string;
  range: string;
  badge: string;
  focus: string;
  description: string;
  outcomes: string[];
  recommendedSports: string[];
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  philosophy: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface ScheduleItem {
  id: string;
  day: string; // e.g., 'الأحد'
  time: string;
  sport: string;
  ageGroup: string;
  coach: string;
  location: string;
  seatsLeft: number;
}

export interface EventItem {
  id: string;
  title: string;
  type: string; // 'مخيم صيفي' | 'بطولة' | 'يوم مفتوح'
  date: string;
  location: string;
  ageRange: string;
  description: string;
  price: string;
  spotsLeft: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
