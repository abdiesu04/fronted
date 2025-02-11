'use client';

import { AddTodo } from './components/AddTodo';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { ThemeToggle } from './components/ThemeToggle';
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
          <div className="bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg">
            <p className="text-red-700 dark:text-red-400 font-medium">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 relative">
      <ThemeToggle />
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 
                         tracking-tight mb-4">
              Tahdda Todo List
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <p>Created by</p>
              <a
                href="https://github.com/abdiesu04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 
                         transition-colors group relative"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">abdiesu04</span>
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 
                             scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl shadow-xl dark:shadow-2xl/10 overflow-hidden">
          <div className="p-6 space-y-6">
            <AddTodo onAdd={addTodo} />
            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-t-blue-500 animate-spin absolute top-0"></div>
                  </div>
                </div>
              ) : todos.length === 0 ? (
                <div className="text-center py-20">
                  <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-xl font-medium text-gray-900 dark:text-white mb-2">No tasks yet</p>
                  <p className="text-gray-500 dark:text-gray-400">Add your first task to get started</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <div key={todo.id} 
                         className={`transform transition-all duration-300 opacity-0 
                                   staggered-slide-in-${Math.min(index, 9)}`}>
                      <TodoItem
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with{' '}
            <span className="text-red-500">❤</span>
            {' '}using{' '}
            <span className="font-medium text-gray-900 dark:text-white">Next.js</span>
            {' '}and{' '}
            <span className="font-medium text-gray-900 dark:text-white">TypeScript</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
