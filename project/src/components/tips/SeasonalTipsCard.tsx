import { Calendar } from 'lucide-react';

interface SeasonalTipsCardProps {
  season: string;
  tasks: string[];
  onClick: () => void;
  isSelected: boolean;
}

const SeasonalTipsCard = ({ season, tasks, onClick, isSelected }: SeasonalTipsCardProps) => {
  // Get the season color
  const getSeasonColor = (season: string) => {
    switch (season.toLowerCase()) {
      case 'spring':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'summer':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'fall':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'winter':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <button
      className={`block w-full text-left border rounded-lg transition-all duration-200 ${
        isSelected 
          ? `${getSeasonColor(season)} shadow-md` 
          : 'border-gray-200 hover:border-gray-300 hover:shadow'
      }`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5" />
          <h3 className="font-medium">{season}</h3>
        </div>
        <p className="text-sm text-gray-600">
          {tasks.length} gardening tasks for this season
        </p>
      </div>
    </button>
  );
};

export default SeasonalTipsCard;