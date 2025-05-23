import { Plant } from '../types/plants';

export const plantsData: Plant[] = [
  {
    id: '1',
    name: 'Cherry Tomatoes',
    description: 'Sweet, bite-sized tomatoes perfect for containers and small spaces.',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '1-2 sq ft',
    growingSeason: 'Spring, Summer',
    harvestTime: '60-80 days',
    careInstructions: [
      'Plant in well-draining soil rich in organic matter',
      'Water consistently, keeping soil moist but not soggy',
      'Provide support with stakes or a cage as plants grow',
      'Pinch off suckers (side shoots) to focus energy on fruit production',
      'Fertilize every 2-3 weeks with a balanced fertilizer'
    ],
    tips: 'Cherry tomatoes are prone to splitting if watered irregularly. Try to maintain consistent soil moisture.',
    companionPlants: ['Basil', 'Marigolds', 'Onions', 'Garlic']
  },
  {
    id: '2',
    name: 'Bell Peppers',
    description: 'Colorful, versatile peppers that add crunch and flavor to many dishes.',
    image: 'https://images.pexels.com/photos/1435902/pexels-photo-1435902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Medium',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '1-2 sq ft',
    growingSeason: 'Spring, Summer',
    harvestTime: '70-90 days',
    careInstructions: [
      'Plant in rich, well-draining soil after all danger of frost has passed',
      'Water deeply but infrequently, allowing soil to dry slightly between waterings',
      'Support taller varieties with stakes to prevent bending',
      'Apply mulch to maintain soil moisture and temperature',
      'Harvest peppers when they reach full size and desired color'
    ],
    tips: 'The longer peppers stay on the plant, the sweeter they become and the more their color develops.',
    companionPlants: ['Basil', 'Onions', 'Spinach', 'Tomatoes']
  },
  {
    id: '3',
    name: 'Lettuce',
    description: 'Quick-growing leafy greens that can be harvested multiple times.',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Partial Sun',
    waterNeeds: 'High',
    spaceNeeded: '0.5-1 sq ft',
    growingSeason: 'Spring, Fall',
    harvestTime: '30-45 days',
    careInstructions: [
      'Sow seeds shallowly in loose, rich soil',
      'Keep soil consistently moist',
      'Provide afternoon shade in hot climates',
      'Harvest outer leaves as needed, allowing inner leaves to continue growing',
      'Plant successive crops every 2-3 weeks for continuous harvest'
    ],
    tips: 'Lettuce grows best in cool weather. In hot climates, choose heat-resistant varieties and provide afternoon shade.',
    companionPlants: ['Carrots', 'Radishes', 'Cucumbers', 'Strawberries']
  },
  {
    id: '4',
    name: 'Basil',
    description: 'Aromatic herb that pairs perfectly with tomatoes and many other dishes.',
    image: 'https://images.pexels.com/photos/1425175/pexels-photo-1425175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '0.5-1 sq ft',
    growingSeason: 'Spring, Summer',
    harvestTime: '30-60 days',
    careInstructions: [
      'Plant in well-draining soil rich in organic matter',
      'Water regularly, allowing soil to dry slightly between waterings',
      'Pinch off flower buds to encourage leaf production',
      'Harvest leaves regularly to promote bushier growth',
      'Protect from cold temperatures below 50°F (10°C)'
    ],
    tips: 'Pinch the center stem just above a leaf node to encourage the plant to branch out and become bushier.',
    companionPlants: ['Tomatoes', 'Peppers', 'Oregano', 'Parsley']
  },
  {
    id: '5',
    name: 'Spinach',
    description: 'Nutrient-dense leafy green that grows quickly in cool weather.',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Partial Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '0.5-1 sq ft',
    growingSeason: 'Spring, Fall',
    harvestTime: '30-45 days',
    careInstructions: [
      'Sow seeds directly in rich, well-draining soil',
      'Keep soil consistently moist but not waterlogged',
      'Thin seedlings to 3-4 inches apart',
      'Provide afternoon shade in warmer weather',
      'Harvest outer leaves first, allowing plant to continue growing'
    ],
    tips: 'Spinach bolts (goes to seed) quickly in hot weather. Plant in early spring or fall for best results.',
    companionPlants: ['Strawberries', 'Peas', 'Cauliflower', 'Radishes']
  },
  {
    id: '6',
    name: 'Radishes',
    description: 'Fast-growing root vegetables that add a peppery crunch to salads.',
    image: 'https://images.pexels.com/photos/244393/pexels-photo-244393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '0.5 sq ft',
    growingSeason: 'Spring, Fall',
    harvestTime: '21-30 days',
    careInstructions: [
      'Sow seeds directly in loose, well-draining soil',
      'Thin seedlings to 1-2 inches apart',
      'Keep soil consistently moist',
      'Harvest when roots reach desired size, usually marble to golf ball size',
      'Plant successive crops every 1-2 weeks for continuous harvest'
    ],
    tips: 'Radishes grow best in cool weather. Hot temperatures can make them bolt and become woody and spicy.',
    companionPlants: ['Lettuce', 'Spinach', 'Carrots', 'Cucumbers']
  },
  {
    id: '7',
    name: 'Mint',
    description: 'Vigorous herb with a refreshing flavor, perfect for teas and cocktails.',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Partial Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '1 sq ft',
    growingSeason: 'Spring, Summer, Fall',
    careInstructions: [
      'Plant in a container to prevent spreading',
      'Use rich, well-draining soil',
      'Water regularly, keeping soil moist',
      'Harvest sprigs as needed to encourage bushy growth',
      'Divide plants every 2-3 years to rejuvenate'
    ],
    tips: 'Mint is very invasive. Always grow it in a container to prevent it from taking over your garden.',
    companionPlants: ['Tomatoes', 'Cabbage', 'Peas']
  },
  {
    id: '8',
    name: 'Zucchini',
    description: 'Productive summer squash that provides abundant harvests in small spaces.',
    image: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Medium',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '2-3 sq ft',
    growingSeason: 'Summer',
    harvestTime: '45-60 days',
    careInstructions: [
      'Plant in rich, well-draining soil after all danger of frost has passed',
      'Water deeply at the base of plants, avoiding wetting leaves',
      'Apply mulch to maintain soil moisture and suppress weeds',
      'Harvest frequently when fruits are 6-8 inches long',
      'Watch for powdery mildew and treat with organic fungicides if necessary'
    ],
    tips: 'Hand pollination may be necessary for container-grown zucchini if pollinators are scarce.',
    companionPlants: ['Nasturtiums', 'Corn', 'Beans', 'Marigolds']
  },
  {
    id: '9',
    name: 'Green Beans',
    description: 'Easy to grow vegetable that produces abundantly in vertical spaces.',
    image: 'https://images.pexels.com/photos/1784189/pexels-photo-1784189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Easy',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '1 sq ft',
    growingSeason: 'Spring, Summer',
    harvestTime: '50-60 days',
    careInstructions: [
      'Plant seeds directly in rich, well-draining soil after all danger of frost',
      'Provide support for pole varieties with a trellis or stakes',
      'Water consistently, especially during flowering and pod development',
      'Harvest beans when they are young and tender',
      'Pick regularly to encourage continued production'
    ],
    tips: 'For rooftop gardens, pole beans are more space-efficient than bush varieties as they grow vertically.',
    companionPlants: ['Carrots', 'Corn', 'Radishes', 'Marigolds']
  },
  {
    id: '10',
    name: 'Strawberries',
    description: 'Sweet perennial fruits that grow well in containers and hanging baskets.',
    image: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    difficulty: 'Medium',
    sunlight: 'Full Sun',
    waterNeeds: 'Medium',
    spaceNeeded: '1 sq ft per plant',
    growingSeason: 'Spring, Summer',
    harvestTime: '90-110 days',
    careInstructions: [
      'Plant in rich, slightly acidic soil with good drainage',
      'Water regularly, keeping soil moist but not soggy',
      'Apply mulch to keep fruits clean and suppress weeds',
      'Remove runners unless you want the plants to spread',
      'Protect fruits from birds with netting if necessary'
    ],
    tips: 'Strawberries grow well in hanging baskets or special strawberry pots, which maximize space and keep fruits off the soil.',
    companionPlants: ['Lettuce', 'Spinach', 'Onions', 'Thyme']
  }
];