import { Save, Download, Upload, Trash2, Plus, Minus } from 'lucide-react';

interface DesignerControlsProps {
  onSave: () => void;
  onLoad: () => void;
  onClear: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom: number;
}

const DesignerControls = ({
  onSave,
  onLoad,
  onClear,
  onZoomIn,
  onZoomOut,
  zoom
}: DesignerControlsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-between items-center">
      <div className="flex gap-2">
        <button
          onClick={onSave}
          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
          title="Save Layout"
        >
          <Save className="h-5 w-5" />
          <span className="ml-1 hidden sm:inline">Save</span>
        </button>
        <button
          onClick={onLoad}
          className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center"
          title="Load Layout"
        >
          <Upload className="h-5 w-5" />
          <span className="ml-1 hidden sm:inline">Load</span>
        </button>
        <button
          onClick={onClear}
          className="p-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors flex items-center"
          title="Clear Layout"
        >
          <Trash2 className="h-5 w-5" />
          <span className="ml-1 hidden sm:inline">Clear</span>
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onZoomOut}
          className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          title="Zoom Out"
        >
          <Minus className="h-5 w-5" />
        </button>
        <span className="text-sm">{Math.round(zoom * 100)}%</span>
        <button
          onClick={onZoomIn}
          className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          title="Zoom In"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DesignerControls;