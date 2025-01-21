import { createStore } from 'redux';

let maxId = 0;

const todos = (state = { todos: [] }, action) => {
    console.log(action);
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: ++maxId,
                    text: action.text,
                    completed: false,
                },
            ],
        };
    }
    if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter((t) => t.id !== action.id),
        };
    }
    if (action.type === 'UPDATE_TODO') {
        return {
            ...state,
            todos: state.todos.map((t) => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        text: action.text,
                    };
                }
                return t;
            }),
        };
    }
    if (action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map((t) => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        completed: !t.completed,
                    };
                }
                return t;
            }),
        };
    }

    return state;
};

export const store = createStore(todos);

export const addTodo = (text) => ({ type: 'ADD_TODO', text });

export const removeTodo = (id) => ({ type: 'REMOVE_TODO', id });

export const updateTodo = (id, text) => ({ type: 'UPDATE_TODO', id, text });

export const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', id });
