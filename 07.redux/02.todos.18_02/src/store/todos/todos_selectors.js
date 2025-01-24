export const selectAllTodos = (state) => state.todos;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all':
            return state.todos;
        case 'completed':
            return state.todos.filter((todo) => todo.completed);
        case 'active':
            return state.todos.filter((todo) => !todo.completed);
        default:
            return state.todos;
    }
};
