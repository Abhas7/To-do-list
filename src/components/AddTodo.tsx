
import { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8 animate-fade-in">
      <div className="relative flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-4 py-3 text-sm bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:border-success focus:ring-1 focus:ring-success transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="absolute right-2 p-2 text-gray-400 hover:text-success disabled:opacity-50 disabled:hover:text-gray-400 transition-colors duration-200"
        >
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
