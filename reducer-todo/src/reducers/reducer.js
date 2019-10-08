

const initialTodo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

function reducer(state, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export {initialTodo, reducer};