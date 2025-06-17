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
    image: 'https://images.healthshots.com/healthshots/en/uploads/2024/07/24112903/1-40.jpg',
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
    image: 'data:image/jpeg;base64,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',
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
    image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/06/green-beans-732x549-thumbnail.jpg',
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