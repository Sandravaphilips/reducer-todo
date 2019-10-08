

const initialTodo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':{
            addTodo(e, todoTask, state);
            break;
        }
        default:
            return state;
    }
}

function addTodo(e, todoTask, state) {
    e.preventDefault();
    const existing = state.filter(
      todo => todo.task === todoTask
    );
    if (existing.length === 0) {
      const newTodo = {
        task: todoTask,
        id: Date.now(),
        completed: false
      };
      return [...state, newTodo]
    }
}

export {initialTodo, reducer};