import { useState, useEffect } from 'react';
import { Save, Download, Upload, Trash2, Plus, Minus } from 'lucide-react';
import { toast } from 'react-hot-toast';
import RooftopCanvas from '../components/designer/RooftopCanvas';
import PlantPalette from '../components/designer/PlantPalette';
import { Plant } from '../types/plants';
import { usePlants } from '../hooks/usePlants';
import DesignerControls from '../components/designer/DesignerControls';

const LayoutDesignerPage = () => {
  const { plants } = usePlants();
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });
  const [placedPlants, setPlacedPlants] = useState<Array<{
    id: string;
    plant: Plant;
    x: number;
    y: number;
    rotation: number;
    scale: number;
  }>>([]);
  const [zoom, setZoom] = useState(1);

  const handlePlantSelect = (plant: Plant) => {
    setSelectedPlant(plant);
    toast.success(`${plant.name} selected`);
  };

  const handlePlantPlace = (x: number, y: number) => {
    if (selectedPlant) {
      const newPlantInstance = {
        id: Date.now().toString(),
        plant: selectedPlant,
        x,
        y,
        rotation: 0,
        scale: 1,
      };
      
      setPlacedPlants([...placedPlants, newPlantInstance]);
      toast.success(`${selectedPlant.name} placed`);
    }
  };

  const handlePlantRemove = (id: string) => {
    setPlacedPlants(placedPlants.filter(p => p.id !== id));
    toast.success('Plant removed');
  };

  const handleSaveLayout = () => {
    // In a real app, this would save to a database
    const layout = {
      canvasSize,
      placedPlants,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('veggieBuddyLayout', JSON.stringify(layout));
    toast.success('Layout saved successfully!');
  };

  const handleLoadLayout = () => {
    const savedLayout = localStorage.getItem('veggieBuddyLayout');
    if (savedLayout) {
      const layout = JSON.parse(savedLayout);
      setCanvasSize(layout.canvasSize);
      setPlacedPlants(layout.placedPlants);
      toast.success('Layout loaded successfully!');
    } else {
      toast.error('No saved layout found');
    }
  };

  const handleClearLayout = () => {
    if (placedPlants.length === 0) {
      toast.error('Layout is already empty');
      return;
    }
    
    if (confirm('Are you sure you want to clear the layout? This action cannot be undone.')) {
      setPlacedPlants([]);
      toast.success('Layout cleared');
    }
  };

  const handleZoomIn = () => {
    if (zoom < 2) {
      setZoom(zoom + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Rooftop Layout Designer</h1>
        <p className="mt-2 text-lg text-gray-600">
          Design your perfect rooftop garden by placing plants on the canvas.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Plant Palette */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Plants Palette</h2>
            <PlantPalette 
              plants={plants} 
              onPlantSelect={handlePlantSelect} 
              selectedPlant={selectedPlant}
            />
          </div>
        </div>
        
        {/* Designer Canvas */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white rounded-lg shadow p-4">
            <DesignerControls 
              onSave={handleSaveLayout}
              onLoad={handleLoadLayout}
              onClear={handleClearLayout}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              zoom={zoom}
            />
            
            <div className="mt-4 overflow-auto border-2 border-gray-200 rounded-lg">
              <RooftopCanvas 
                width={canvasSize.width}
                height={canvasSize.height}
                placedPlants={placedPlants}
                selectedPlant={selectedPlant}
                onPlantPlace={handlePlantPlace}
                onPlantRemove={handlePlantRemove}
                zoom={zoom}
              />
            </div>
            
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-800">Design Tips</h3>
              <ul className="mt-2 text-sm text-green-700 list-disc list-inside space-y-1">
                <li>Consider sunlight direction when placing plants</li>
                <li>Group plants with similar water needs together</li>
                <li>Allow enough space for plants to grow</li>
                <li>Place taller plants where they won't shade smaller ones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDesignerPage;