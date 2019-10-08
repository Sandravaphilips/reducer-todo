import React from 'react';

export default function Todoform(props) {
    const {value, onInputChange} = props;
    
    return(
        <div>
            <input name ='todo' type='text' placeholder='...todo' onChange={onInputChange} value={value}/>
            <button>Add Todo</button>
        </div>
    )
}