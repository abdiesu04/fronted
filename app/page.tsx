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
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Todo List</h1>
        
        <AddTodo onAdd={addTodo} />
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        <div className="bg-white rounded-lg shadow">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : todos.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No todos found. Add some!
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
