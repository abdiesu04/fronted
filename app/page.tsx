'use client';

import { AddTodo } from './components/AddTodo';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';

export default function Home() {
  const {
    todos,
    isLoading,
    error,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  if (error) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <p className="text-red-700 font-medium">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Elegant Todo List
          </h1>
          <p className="text-gray-600">Organize your tasks with style</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
          <AddTodo onAdd={addTodo} />
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

          <div className="space-y-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              </div>
            ) : todos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No todos found.</p>
                <p className="text-gray-400">Add your first todo to get started!</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>Made with ❤️ using Next.js and TypeScript</p>
        </footer>
      </div>
    </main>
  );
}
