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
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <div className="flex-1 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="✨ Add a magical task..."
            className="relative w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border border-purple-200 
                     dark:border-purple-800/50 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     dark:focus:ring-purple-400
                     placeholder:text-gray-400 dark:placeholder:text-gray-600 
                     text-gray-700 dark:text-gray-300
                     transition-all duration-300"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:rotate-180 transition-transform duration-300"
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
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                   dark:from-purple-500 dark:to-pink-500
                   text-white font-medium rounded-xl
                   hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                   dark:focus:ring-purple-400 dark:focus:ring-offset-gray-900
                   transform transition-all duration-300 hover:scale-105 active:scale-95
                   hover:shadow-lg hover:shadow-purple-500/25"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}; 