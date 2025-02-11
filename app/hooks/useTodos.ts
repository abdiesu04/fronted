import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '../types/todo';

const STORAGE_KEY = 'todos';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data from API and localStorage
  useEffect(() => {
    const loadTodos = async () => {
      try {
        // Try to load from localStorage first
        const storedTodos = localStorage.getItem(STORAGE_KEY);
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
          setIsLoading(false);
          return;
        }

        // If no localStorage data, fetch from API
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch todos');
        const data = await response.json();
        const first20Todos = data.slice(0, 20);
        setTodos(first20Todos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(first20Todos));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1, // Default userId
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    isLoading,
    error,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}; 