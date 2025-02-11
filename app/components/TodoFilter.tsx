import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter = ({ currentFilter, onFilterChange }: TodoFilterProps) => {
  const filters: FilterType[] = ['all', 'completed', 'pending'];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
            ${currentFilter === filter
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
              : 'bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
            border border-transparent
            ${currentFilter === filter
              ? 'border-blue-500/20 dark:border-blue-400/20'
              : 'border-gray-200/50 dark:border-gray-700/50'
            }
            transform hover:-translate-y-0.5 active:translate-y-0`}
        >
          <span className="relative capitalize">
            {filter}
            {currentFilter === filter && (
              <span className="absolute -right-3 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}; 