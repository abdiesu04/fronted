import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="group flex items-center justify-between py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 
                    rounded-xl transition-all duration-300 hover:shadow-md dark:hover:shadow-purple-500/5">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-purple-300 
                     dark:border-purple-700 transition-all duration-300
                     checked:border-purple-500 checked:bg-purple-500
                     dark:checked:border-purple-400 dark:checked:bg-purple-400
                     hover:border-purple-500 dark:hover:border-purple-400 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
          <svg
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     opacity-0 peer-checked:opacity-100 transition-opacity text-white
                     peer-checked:animate-check"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 5l2.5 2.5L9 1" />
          </svg>
        </div>
        <span className={`text-gray-700 dark:text-gray-300 transition-all duration-300
          ${todo.completed ? 'line-through text-gray-400 dark:text-gray-600' : 'hover:text-gray-900 dark:hover:text-white'}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-all duration-300
                 px-3 py-1.5 text-sm text-red-600 dark:text-red-400 
                 hover:text-red-700 dark:hover:text-red-300 
                 hover:bg-red-50 dark:hover:bg-red-900/30
                 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20"
      >
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </span>
      </button>
    </div>
  );
}; 