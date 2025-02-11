import { useState } from 'react';

interface AddTodoProps {
  onAdd: (title: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a new task..."
              className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl
                       border border-gray-200 dark:border-gray-700/50
                       shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                       dark:focus:ring-blue-500/20 dark:focus:border-blue-400
                       placeholder:text-gray-500 dark:placeholder:text-gray-500
                       text-gray-900 dark:text-gray-100
                       transition-all duration-300"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 dark:text-gray-600 transition-transform duration-300 group-focus-within:rotate-180"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                     dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700
                     text-white font-medium rounded-xl
                     shadow-sm hover:shadow-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900
                     transform hover:-translate-y-0.5 active:translate-y-0
                     transition-all duration-150"
          >
            Add Task
          </button>
        </div>
      </form>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 
                    rounded-xl blur opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 
                    transition duration-500"></div>
    </div>
  );
}; 