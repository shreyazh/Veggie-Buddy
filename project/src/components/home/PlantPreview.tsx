import { Droplets, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlantPreviewProps {
  name: string;
  image: string;
  difficulty: string;
  sunlight: string;
  waterNeeds: string;
}

const PlantPreview = ({ name, image, difficulty, sunlight, waterNeeds }: PlantPreviewProps) => {
  return (
    <Link to="/plants" className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-medium">{name}</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className={`text-xs px-2 py-1 rounded-full ${
              difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {difficulty}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Sun className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{sunlight}</span>
            </div>
            <div className="flex items-center">
              <Droplets className="h-4 w-4 mr-1 text-blue-500" />
              <span>{waterNeeds}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlantPreview;