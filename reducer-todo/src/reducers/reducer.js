

const initialState = {todos: [
    {
        task: 'Learn about reducers',
        id: 3892987589,
        completed: false
    },
    ],
    name: ''
}

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':{
            // debugger
            return {todos: [...initialState.todos, {task: state.todo, id: Date.now(), completed: false}]}
            
        }
        case 'TOGGLE_COMPLETED_FIELD' : {
            return {todos: action.payload}
        }
        case 'CLEAR_COMPLETED': {
            return {todos: action.payload}
        }
        case 'INPUT_CHANGE': {
            return {[action.payload.name]: action.payload.value}
        }
        default:
            return state;
    }
}

// function addTodo( todoTask, initialState) {
//     // let todoTask = e.target.value;
    
//     const existing = initialState.filter(
//       todo => todo.task === todoTask
//     );
    
//     if(existing.length === 0) {
//         const newTodo = {
//             task: todoTask,
//             id: Date.now(),
//             completed: false
//         };
//         return [initialState.concat(newTodo)]
//     }
    
// }



// const clearCompleted = (e, initialState) => {
//     e.preventDefault();
//     const todosArray = initialState.filter(todo => !todo.completed)
//     return todosArray;
// };

export {initialState, reducer};