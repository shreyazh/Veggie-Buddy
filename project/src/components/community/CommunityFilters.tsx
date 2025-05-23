import { Filter, Clock, ThumbsUp } from 'lucide-react';

interface CommunityFiltersProps {
  activeFilter: string;
  sortBy: 'recent' | 'popular';
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: 'recent' | 'popular') => void;
}

const CommunityFilters = ({ 
  activeFilter, 
  sortBy, 
  onFilterChange, 
  onSortChange 
}: CommunityFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'question', label: 'Questions' },
    { id: 'success-story', label: 'Success Stories' },
    { id: 'problem', label: 'Problems' },
    { id: 'tip', label: 'Tips' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeFilter === filter.id
                  ? 'bg-green-100 text-green-800'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
        <div className="space-y-2">
          <button
            className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${
              sortBy === 'recent'
                ? 'bg-green-100 text-green-800'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onSortChange('recent')}
          >
            <Clock className="h-4 w-4 mr-2" />
            Most Recent
          </button>
          <button
            className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${
              sortBy === 'popular'
                ? 'bg-green-100 text-green-800'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onSortChange('popular')}
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Most Popular
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFilters;