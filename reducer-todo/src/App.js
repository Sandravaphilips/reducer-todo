import React, {useReducer} from 'react';
import { reducer, initialTodo } from "./reducers";
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialTodo)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
