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
        <div className="flex-1 relative">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     placeholder:text-gray-400 text-gray-700 transition-all duration-200"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
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
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl
                   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                   transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}; 