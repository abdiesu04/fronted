import { Todo } from '../types/todo';
import { useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group flex items-center justify-between p-4 
                rounded-xl transition-all duration-300 
                ${todo.completed 
                  ? 'bg-gray-50/80 dark:bg-gray-800/40' 
                  : 'hover:bg-white dark:hover:bg-gray-800/60'} 
                glass hover:shadow-lg dark:hover:shadow-black/5
                border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50
                transform hover:-translate-y-0.5
                animate-slide-in relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 
                     border-gray-300 dark:border-gray-600
                     transition-all duration-300
                     checked:border-blue-500 checked:bg-blue-500
                     dark:checked:border-blue-400 dark:checked:bg-blue-400
                     hover:border-blue-400 dark:hover:border-blue-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-400/20
                     group-hover:scale-105"
          />
          <svg
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     opacity-0 peer-checked:opacity-100 transition-all duration-300 text-white
                     transform scale-0 peer-checked:scale-100"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1.5 5.5L3.5 7.5L8.5 2.5" />
          </svg>
        </div>
        
        <div className="flex-1 min-w-0">
          <span className={`block truncate transition-all duration-300
            ${todo.completed 
              ? 'text-gray-500 dark:text-gray-500 line-through' 
              : 'text-gray-900 dark:text-gray-100'}
            ${isHovered ? 'translate-x-1' : ''}`}>
            {todo.title}
          </span>
          {todo.completed && (
            <span className="text-xs text-blue-500 dark:text-blue-400 mt-0.5 animate-fade-in">
              Completed
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={() => onDelete(todo.id)}
          className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0
                   transition-all duration-300 ease-out
                   p-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400
                   hover:bg-red-50 dark:hover:bg-red-500/10
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20"
          aria-label="Delete todo"
        >
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 