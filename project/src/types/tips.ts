export interface Tip {
  id: string;
  title: string;
  category: 'general' | 'seasonal' | 'pests' | 'watering';
  content: string[];
  image?: string;
  steps?: string[];
  dosDonts?: {
    dos: string[];
    donts: string[];
  };
}

export interface SeasonalTip {
  id: string;
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter';
  tasks: string[];
}