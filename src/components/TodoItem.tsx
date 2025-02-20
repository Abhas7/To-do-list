
import { Check, X } from 'lucide-react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="group animate-slide-up flex items-center justify-between p-4 mb-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-200">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(id)}
          className={`flex items-center justify-center w-5 h-5 rounded-full border transition-all duration-200 ${
            completed
              ? 'bg-success border-success'
              : 'border-gray-300 hover:border-success'
          }`}
        >
          {completed && <Check size={12} className="text-white" />}
        </button>
        <span className={`text-sm ${completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-destructive transition-all duration-200"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
