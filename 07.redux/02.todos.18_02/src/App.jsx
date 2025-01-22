import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const updateTodo = (id, text) => ({ type: UPDATE_TODO, id, text });

const persistTodos = [{ id: -100, text: 'text -100', completed: false }];
const initialState = { todos: persistTodos };

const todos = (state = initialState, action) => {
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
export const store = createStore(
    todos,
    /* preloadedState, */ devToolsEnhancer()
);

const App = () => {
    return (
        <div className="App">
            <h1>todos</h1>
            <NewTodo />
            <Todos />
        </div>
    );
};
export default App;

export const Todo = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <input
                type="checkbox"
                name="completed"
                id={`completed_${id}`}
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
            />
            <input
                type="text"
                name="text"
                id={`text_${id}`}
                value={text}
                onChange={(e) => dispatch(updateTodo(id, e.target.value))}
            />
            <input
                type="button"
                value="x"
                onClick={() => dispatch(deleteTodo(id))}
            />
        </div>
    );
};

const selectAllTodos = (state) => state.todos;

export const Todos = () => {
    const todos = useSelector(selectAllTodos);
    console.log(todos);
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    {...todo}
                />
            ))}
        </div>
    );
};

export const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        dispatch(addTodo(text));
        event.target.reset();
    };

    return (
        <div className="NewTodo">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    id="text"
                />
                <input
                    type="submit"
                    value="add new"
                />
            </form>
        </div>
    );
};
