import React from 'react';
import styled from "styled-components";

const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 20%;

    input{
        border-radius: 5px;
        height: 30px;
        margin-bottom: 20px;
        border: 1px solid white;
    }

    button{
        border-radius: 5px;
        width: 100px;
        height: 30px;
        align-self: center;
        border: none;

        &:hover{
            color: white;
            background-color: black;
        }
    }

`

export default function Todoform({value, onInputChange, addTodo}) {
    
    return(
        <FormStyle>
            <input name ='todo' type='text' value={value} placeholder='...todo' onChange={onInputChange} />
            <button onClick={addTodo} >Add Todo</button>
        </FormStyle>
    )
}