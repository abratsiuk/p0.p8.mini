import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './todos_const';

const persistTodos = [{ id: -100, text: 'text -100', completed: false }];
const initialState = { todos: persistTodos };

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.text,
                        completed: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.id) {
                        return todo;
                    } else {
                        return { ...todo, completed: !todo.completed };
                    }
                }),
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.id) {
                        return todo;
                    } else {
                        return { ...todo, text: action.text };
                    }
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
};
