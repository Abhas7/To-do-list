
import TodoList from '../components/TodoList';

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto pt-12 pb-24">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-medium text-gray-900 mb-2">Tasks</h1>
          <p className="text-gray-500">Organize your day with elegance</p>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
