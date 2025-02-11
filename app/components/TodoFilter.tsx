import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter = ({ currentFilter, onFilterChange }: TodoFilterProps) => {
  const filters: FilterType[] = ['all', 'completed', 'pending'];

  return (
    <div className="flex flex-wrap gap-2 mb-6 p-2 bg-gray-50 rounded-xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2.5 rounded-lg capitalize text-sm font-medium transition-all duration-200
            ${currentFilter === filter
              ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'
              : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1`}
        >
          {filter}
          <span className="ml-1 text-xs">
            {filter === currentFilter && '•'}
          </span>
        </button>
      ))}
    </div>
  );
}; 