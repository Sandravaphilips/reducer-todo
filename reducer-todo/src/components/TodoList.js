import React from 'react';
import Todo from "./Todo";
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

export default function TodoList({todos, clearCompleted, toggleTodoCompleteAtIndex}) {
      

    return (
        <ListStyle>
            <div>
                {todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} onClick={toggleTodoCompleteAtIndex}/>
                })}
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
        </ListStyle>
       
    )
}