import React, {useReducer} from 'react';
import Todo from "./Todo";
import { reducer, initialState } from "../reducers/reducer";
import styled from "styled-components";

const ListStyle = styled.div`
    margin-top: 50px;
    text-align: start;

    button{
        border-radius: 5px;
        width: 150px;
        height: 30px;
        align-self: center;
        border: none;

        &:hover{
            color: white;
            background-color: black;
        }
    }
`

export default function TodoList() {
    const [todos, dispatch] = useReducer(reducer, initialState.todos)

    function toggleTodoCompleteAtIndex(id) {
        const updatedTodos = todos.map(todo => {
          return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        });
        dispatch({type: 'TOGGLE_COMPLETED_FIELD', payload: updatedTodos})
        
    }

    const clearCompleted = (e) => {
        e.preventDefault();
        const todosArray = todos.filter(todo => !todo.completed)
        dispatch({type: 'CLEAR_COMPLETED', payload: todosArray})
    };

    return (
        <ListStyle>
            <div>
                {todos.map((todo) => {
                    // debugger
                    return <Todo todo={todo} key={todo.id} onClick={toggleTodoCompleteAtIndex}/>
                })}
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
        </ListStyle>
       
    )
}