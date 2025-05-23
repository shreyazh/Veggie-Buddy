import { useRef, useEffect, useState } from 'react';
import { Plant } from '../../types/plants';

interface RooftopCanvasProps {
  width: number;
  height: number;
  placedPlants: Array<{
    id: string;
    plant: Plant;
    x: number;
    y: number;
    rotation: number;
    scale: number;
  }>;
  selectedPlant: Plant | null;
  onPlantPlace: (x: number, y: number) => void;
  onPlantRemove: (id: string) => void;
  zoom: number;
}

const RooftopCanvas = ({
  width,
  height,
  placedPlants,
  selectedPlant,
  onPlantPlace,
  onPlantRemove,
  zoom
}: RooftopCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!selectedPlant) return;
    
    const rect = containerRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    onPlantPlace(x, y);
  };
  
  const handlePlantClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedPlantId(selectedPlantId === id ? null : id);
  };
  
  const handleRemovePlant = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onPlantRemove(id);
    setSelectedPlantId(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative bg-gray-100 cursor-pointer overflow-hidden"
      style={{ 
        width: '100%', 
        height: '500px',
        backgroundImage: 'url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleCanvasClick}
    >
      <div 
        className="absolute top-0 left-0 grid"
        style={{ 
          width: width, 
          height: height, 
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {placedPlants.map(plant => (
          <div 
            key={plant.id}
            className={`absolute cursor-move transition-shadow duration-200 ${
              selectedPlantId === plant.id ? 'shadow-lg ring-2 ring-green-500' : ''
            }`}
            style={{ 
              left: `${plant.x}px`, 
              top: `${plant.y}px`,
              transform: `rotate(${plant.rotation}deg) scale(${plant.scale})`,
              zIndex: selectedPlantId === plant.id ? 10 : 1,
            }}
            onClick={(e) => handlePlantClick(e, plant.id)}
          >
            <div className="relative">
              <img 
                src={plant.plant.image} 
                alt={plant.plant.name}
                className="w-16 h-16 object-contain"
              />
              {selectedPlantId === plant.id && (
                <button
                  className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-600"
                  onClick={(e) => handleRemovePlant(e, plant.id)}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md text-xs text-gray-700 max-w-xs">
        <p className="font-medium mb-1">Instructions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Select a plant from the palette</li>
          <li>Click on the canvas to place it</li>
          <li>Click on a placed plant to select it</li>
          <li>Click the X to remove a selected plant</li>
        </ul>
      </div>
    </div>
  );
};

export default RooftopCanvas;