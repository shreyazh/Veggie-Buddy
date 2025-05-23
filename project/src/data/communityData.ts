import { Post } from '../types/community';

export const postsData: Post[] = [
  {
    id: '1',
    title: 'My tomato plants have yellow leaves - help!',
    content: 'I\'ve been growing cherry tomatoes on my rooftop for about a month, and lately I\'ve noticed the bottom leaves are turning yellow. The plants are still producing fruit, but I\'m worried something is wrong. I water them daily and they get full sun. Any ideas what could be causing this?',
    category: 'problem',
    image: 'https://images.pexels.com/photos/1675211/pexels-photo-1675211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: '2025-03-15T08:30:00Z',
    author: 'GardenNewbie',
    likes: 5,
    comments: [
      {
        id: 'c1',
        content: 'This sounds like it could be nitrogen deficiency, especially if it\'s the bottom leaves turning yellow. Try adding some balanced organic fertilizer to your containers.',
        author: 'PlantDoctor',
        createdAt: '2025-03-15T09:45:00Z'
      },
      {
        id: 'c2',
        content: 'I had this same issue last year. In my case, I was actually overwatering. Try letting the soil dry out a bit between waterings. Tomatoes don\'t like constantly wet feet!',
        author: 'RooftopFarmer',
        createdAt: '2025-03-15T10:22:00Z'
      },
      {
        id: 'c3',
        content: 'Could also be early blight. Are there any brown spots along with the yellowing? If so, remove the affected leaves and make sure you\'re not getting water on the foliage when you water.',
        author: 'OrganicGardener',
        createdAt: '2025-03-15T14:05:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'First harvest from my rooftop garden!',
    content: 'After months of planning and hard work, I finally harvested my first vegetables from my rooftop garden! I got a beautiful basket of lettuce, radishes, and herbs. It\'s not much, but I\'m so proud of growing my own food in the middle of the city. Thanks to everyone in this community for the advice and encouragement!',
    category: 'success-story',
    image: 'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: '2025-03-10T15:20:00Z',
    author: 'CityGrower',
    likes: 24,
    comments: [
      {
        id: 'c4',
        content: 'Congratulations! There\'s nothing like eating food you\'ve grown yourself. Your harvest looks beautiful!',
        author: 'UrbanFarmer',
        createdAt: '2025-03-10T16:30:00Z'
      },
      {
        id: 'c5',
        content: 'That\'s impressive for a first harvest! What varieties of lettuce did you grow?',
        author: 'LeafyGreens',
        createdAt: '2025-03-10T18:15:00Z'
      },
      {
        id: 'c6',
        content: 'This is so inspiring! I\'m just setting up my own rooftop garden and hope to have a harvest like yours soon.',
        author: 'GardenDreamer',
        createdAt: '2025-03-11T09:10:00Z'
      }
    ]
  },
  {
    id: '3',
    title: 'Best container size for bell peppers?',
    content: 'I want to grow bell peppers on my rooftop this summer, but I\'m not sure what size containers to use. Does anyone have recommendations for the minimum pot size that will work well? I\'m trying to maximize my space but don\'t want to stunt the plants.',
    category: 'question',
    createdAt: '2025-03-08T11:45:00Z',
    author: 'PepperLover',
    likes: 8,
    comments: [
      {
        id: 'c7',
        content: 'I\'ve had good success with 5-gallon (12-inch) containers for bell peppers. Any smaller and they tend to dry out too quickly and the plants get stressed.',
        author: 'ContainerGuru',
        createdAt: '2025-03-08T12:30:00Z'
      },
      {
        id: 'c8',
        content: 'Agree with ContainerGuru. I tried 3-gallon pots last year and the plants were definitely smaller with fewer peppers. 5-gallon is the sweet spot.',
        author: 'VeggieQueen',
        createdAt: '2025-03-08T14:20:00Z'
      },
      {
        id: 'c9',
        content: 'If you\'re really tight on space, you can get away with a 3-gallon pot, but you\'ll need to be vigilant about watering and fertilizing. The self-watering containers work well for this.',
        author: 'SpaceSaver',
        createdAt: '2025-03-08T16:05:00Z'
      }
    ]
  },
  {
    id: '4',
    title: 'Tip: Use eggshells to prevent blossom end rot',
    content: 'Just wanted to share a tip that has worked wonders for me: crushed eggshells for preventing blossom end rot in tomatoes and peppers! I save eggshells throughout the year, bake them to dry completely, then grind them into a powder. I mix this into the soil when planting and also as a top dressing during the growing season. Haven\'t had blossom end rot since I started this practice!',
    category: 'tip',
    createdAt: '2025-03-05T09:15:00Z',
    author: 'OrganicGardener',
    likes: 31,
    comments: [
      {
        id: 'c10',
        content: 'Great tip! How long do you bake the eggshells and at what temperature?',
        author: 'EggCollector',
        createdAt: '2025-03-05T10:20:00Z'
      },
      {
        id: 'c11',
        content: 'I do something similar but add the eggshells to my compost. Works great! Blossom end rot is usually caused by calcium deficiency or inconsistent watering that prevents calcium uptake.',
        author: 'CompostQueen',
        createdAt: '2025-03-05T11:45:00Z'
      },
      {
        id: 'c12',
        content: 'I tried this last year and it definitely helped, but I also made sure to water consistently. I think both practices together made the difference for me.',
        author: 'TomatoFanatic',
        createdAt: '2025-03-05T15:30:00Z'
      }
    ]
  },
  {
    id: '5',
    title: 'How do you manage watering when you\'re away?',
    content: 'I\'m planning a two-week vacation this summer but I\'m worried about my container garden. How do you all handle watering when you\'re away? Are there any automatic systems you recommend that don\'t cost a fortune? Or any tricks for keeping plants hydrated longer?',
    category: 'question',
    createdAt: '2025-03-01T14:30:00Z',
    author: 'TravelingGardener',
    likes: 18,
    comments: [
      {
        id: 'c13',
        content: 'I use a drip irrigation system connected to a timer. The initial setup cost me about $50, but it\'s been worth every penny for peace of mind when traveling. I can set different zones for plants with different water needs.',
        author: 'TechGardener',
        createdAt: '2025-03-01T15:10:00Z'
      },
      {
        id: 'c14',
        content: 'For a low-tech solution, I use water wicking systems with cotton rope and large water bottles. Works great for 1-2 weeks depending on your climate and container size.',
        author: 'FrugalFarmer',
        createdAt: '2025-03-01T16:25:00Z'
      },
      {
        id: 'c15',
        content: 'I invested in self-watering containers and they\'ve been a game-changer. I can fill the reservoirs before leaving and my plants stay happy for about 10 days, even in summer.',
        author: 'ModernGardener',
        createdAt: '2025-03-01T18:40:00Z'
      },
      {
        id: 'c16',
        content: 'Ask a neighbor to water! I trade plant care with my neighbor when either of us travels. Plus it\'s nice to share some of your harvest as a thank you.',
        author: 'CommunityBuilder',
        createdAt: '2025-03-02T09:15:00Z'
      }
    ]
  }
];