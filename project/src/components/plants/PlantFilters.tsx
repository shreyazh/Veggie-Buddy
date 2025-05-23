interface PlantFiltersProps {
  activeFilters: {
    difficulty: string[];
    sunlight: string[];
    waterNeeds: string[];
    season: string[];
  };
  onFilterChange: (filterType: string, value: string, isChecked: boolean) => void;
}

const PlantFilters = ({ activeFilters, onFilterChange }: PlantFiltersProps) => {
  const filters = {
    difficulty: ['Easy', 'Medium', 'Hard'],
    sunlight: ['Full Sun', 'Partial Sun', 'Shade'],
    waterNeeds: ['Low', 'Medium', 'High'],
    season: ['Spring', 'Summer', 'Fall', 'Winter'],
  };

  return (
    <div className="space-y-6">
      {Object.entries(filters).map(([filterType, options]) => (
        <div key={filterType} className="pb-4 border-b border-gray-200 last:border-0">
          <h3 className="font-medium text-gray-900 mb-3 capitalize">
            {filterType === 'waterNeeds' ? 'Water Needs' : filterType}
          </h3>
          <div className="space-y-2">
            {options.map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters[filterType as keyof typeof activeFilters].includes(option)}
                  onChange={(e) => onFilterChange(filterType, option, e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantFilters;