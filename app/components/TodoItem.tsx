import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="group flex items-center justify-between py-4 px-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 
                     transition-all checked:border-indigo-500 checked:bg-indigo-500
                     hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          <svg
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     opacity-0 peer-checked:opacity-100 transition-opacity text-white"
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
        <span className={`text-gray-700 transition-all duration-200
          ${todo.completed ? 'line-through text-gray-400' : 'hover:text-gray-900'}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
                 px-3 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50
                 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20"
      >
        Delete
      </button>
    </div>
  );
}; 