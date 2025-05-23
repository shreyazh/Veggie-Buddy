# 🌱 Veggie Buddy

Veggie Buddy is a comprehensive web application designed to help urban dwellers create and maintain successful rooftop vegetable gardens. With interactive tools, detailed plant information, and a supportive community, Veggie Buddy makes sustainable home gardening accessible to everyone.

## ✨ Features

### 🎨 Rooftop Layout Designer
- Interactive drag-and-drop garden planning
- Visual representation of your garden space
- Plant spacing and sunlight optimization
- Save and load garden layouts

### 🌿 Plant Information
- Detailed care instructions for various vegetables
- Watering and sunlight requirements
- Growing season information
- Companion planting suggestions

### 📚 Gardening Tips
- Seasonal gardening guides
- Pest control advice
- Watering techniques
- Container gardening best practices

### 👥 Community Forum
- Share gardening experiences
- Ask questions and get help
- Post success stories
- Connect with fellow gardeners

### ☁️ Weather Integration
- Real-time weather updates
- Weather-based care recommendations
- Watering schedule adjustments

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/veggie-buddy.git
cd veggie-buddy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Context
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── community/     # Community forum components
│   ├── designer/      # Layout designer components
│   ├── home/         # Homepage components
│   ├── layout/       # Layout components
│   ├── plants/       # Plant information components
│   └── tips/         # Gardening tips components
├── context/          # React context providers
├── data/            # Static data and mock APIs
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── App.tsx          # Root component
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Maintain consistent component structure
- Write meaningful component and function names
- Add JSDoc comments for complex functions

### Component Guidelines
- Create reusable components
- Keep components focused and single-responsibility
- Use proper prop typing
- Implement error boundaries where necessary
- Add loading states and error handling

### Styling
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain responsive design principles
- Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Plant data and images from [Pexels](https://www.pexels.com)
- Icons from [Lucide](https://lucide.dev)
- Weather integration concept inspired by various gardening apps

## 🔮 Future Features

- Plant growth tracking
- Harvest calendar
- Mobile app version
- Marketplace for gardening supplies
- Integration with smart garden sensors
- Social sharing features
- Automated watering system integration