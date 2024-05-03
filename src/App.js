import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo'; // Import the Todo component

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleRemove = (id) => {
    // Filter out the todo item with the given id
    setTodos((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="main">
      <div className='todo'>
        <h1><em>Todo</em></h1>
        <div className='in'>
          <input
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            type='text'
            placeholder='Add your todo item here..'
          />
          <button
            onClick={() => {
              setTodos((prev) => [...prev, todo]);
              setTodo('');
            }}
          >
            Add
          </button>
        </div>
        <ul>
          {/* Render the Todo component for each todo item */}
          {todos.map((item, index) => (
            <Todo  id={index} item={item} onchecked={handleRemove}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
