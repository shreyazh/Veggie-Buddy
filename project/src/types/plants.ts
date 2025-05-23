export interface Plant {
  id: string;
  name: string;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  sunlight: 'Full Sun' | 'Partial Sun' | 'Shade';
  waterNeeds: 'Low' | 'Medium' | 'High';
  spaceNeeded: string;
  growingSeason?: string;
  harvestTime?: string;
  careInstructions: string[];
  tips?: string;
  companionPlants?: string[];
}