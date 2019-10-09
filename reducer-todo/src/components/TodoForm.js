import React, {useReducer} from 'react';
import { reducer, initialState } from "../reducers/reducer";
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
// const initialFormValue = {name: ''}
export default function Todoform() {
    const [formValues, dispatch] = useReducer(reducer, initialState.name)
    // const {onInputChange, onClick} = props;
    const addTodo = e => {

        // debugger
        // const newTodo = {
        //     task: formValues.todo,
        //     id: Date.now(),
        //     completed: false
        // };
        e.preventDefault();
        dispatch({type: 'ADD_TODO'})
        
    }
    return(
        <FormStyle>
            <input name ='todo' type='text' value={formValues.value} placeholder='...todo' onChange={(e) => dispatch({type: 'INPUT_CHANGE', payload: { name: e.target.name, value:e.target.value}})} />
            <button onClick={addTodo} >Add Todo</button>
        </FormStyle>
    )
}