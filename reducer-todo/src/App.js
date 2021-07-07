import React, {useReducer} from 'react';
import { reducer, initialState } from "./reducers/reducer";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = e => {
    e.preventDefault();
    if(state.name === '') {
      return;
    }
    dispatch({type: 'ADD_TODO'})
    
  }
  function toggleTodoCompleteAtIndex(id) {
    const updatedTodos = state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    dispatch({type: 'TOGGLE_COMPLETED_FIELD', payload: updatedTodos})
    
  }

  const clearCompleted = (e) => {
    e.preventDefault();
    const todosArray = state.todos.filter(todo => !todo.completed)
    dispatch({type: 'CLEAR_COMPLETED', payload: todosArray})
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <TodoForm value={state.name} onInputChange={e=> dispatch({type: 'INPUT_CHANGE', payload: e.target.value})} addTodo={addTodo} />

      <TodoList todos={state.todos} clearCompleted={clearCompleted} toggleTodoCompleteAtIndex={toggleTodoCompleteAtIndex} />
    </div>
  );
}

export default App;
