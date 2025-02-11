import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter = ({ currentFilter, onFilterChange }: TodoFilterProps) => {
  const filters: FilterType[] = ['all', 'completed', 'pending'];

  return (
    <div className="flex flex-wrap gap-2 mb-6 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2.5 rounded-lg capitalize text-sm font-medium transition-all duration-200
            ${currentFilter === filter
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-sm'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50`}
        >
          {filter}
          {currentFilter === filter && (
            <span className="ml-2 text-xs opacity-75">•</span>
          )}
        </button>
      ))}
    </div>
  );
}; 