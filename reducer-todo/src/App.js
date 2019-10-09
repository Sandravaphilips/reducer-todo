import React from 'react';
// import { reducer, initialTodo } from "./reducers/reducer";
// import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialTodo)
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <TodoForm />

      <TodoList  />
    </div>
  );
}

export default App;
