
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { ListCheck } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AddTodo onAdd={addTodo} />
      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
              <ListCheck className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">No tasks yet</h3>
            <p className="text-sm text-gray-500">Add your first task above</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
