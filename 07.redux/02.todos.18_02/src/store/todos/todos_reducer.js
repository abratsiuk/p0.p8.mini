import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './todos_const';

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.text,
                    completed: false,
                },
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                } else {
                    return { ...todo, completed: !todo.completed };
                }
            });
        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                } else {
                    return { ...todo, text: action.text };
                }
            });
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
