import { Plant } from '../../types/plants';

interface PlantPaletteProps {
  plants: Plant[];
  onPlantSelect: (plant: Plant) => void;
  selectedPlant: Plant | null;
}

const PlantPalette = ({ plants, onPlantSelect, selectedPlant }: PlantPaletteProps) => {
  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
      {plants.map(plant => (
        <button
          key={plant.id}
          className={`flex items-center w-full p-2 rounded-md transition-colors ${
            selectedPlant?.id === plant.id
              ? 'bg-green-100 text-green-800'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onPlantSelect(plant)}
        >
          <img 
            src={plant.image} 
            alt={plant.name}
            className="w-10 h-10 object-cover rounded-md mr-3"
          />
          <div className="text-left">
            <div className="font-medium">{plant.name}</div>
            <div className="text-xs text-gray-500">
              {plant.spaceNeeded} space • {plant.sunlight}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlantPalette;