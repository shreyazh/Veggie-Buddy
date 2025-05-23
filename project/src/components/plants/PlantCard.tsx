import { useState } from 'react';
import { Sun, Droplets, Maximize2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Plant } from '../../types/plants';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            plant.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            plant.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {plant.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2 text-yellow-500" />
            <span>{plant.sunlight}</span>
          </div>
          <div className="flex items-center">
            <Droplets className="h-4 w-4 mr-2 text-blue-500" />
            <span>{plant.waterNeeds}</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="h-4 w-4 mr-2 text-gray-500" />
            <span>{plant.spaceNeeded}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-green-500" />
            <span>{plant.growingSeason || 'Year-round'}</span>
          </div>
        </div>
        
        <button 
          onClick={toggleExpanded}
          className="flex items-center justify-center w-full py-2 text-green-700 hover:text-green-800 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Care instructions</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Care Instructions</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {plant.careInstructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-medium mr-2">•</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
            
            {plant.tips && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Helpful Tips</h4>
                <p className="text-sm text-gray-600">{plant.tips}</p>
              </div>
            )}
            
            {plant.companionPlants && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Companion Plants</h4>
                <p className="text-sm text-gray-600">{plant.companionPlants.join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCard;