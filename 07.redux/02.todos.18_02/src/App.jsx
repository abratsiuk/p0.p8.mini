import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

let maxId = 0;

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
                        id: ++maxId,
                        text: action.text,
                        completed: false,
                    },
                ],
            };
        default:
            return state;
    }
};
export const store = createStore(todos);

const App = () => {
    return (
        <div>
            <NewTodo />
            <Todos />
        </div>
    );
};
export default App;

export const Todo = ({ id, text, completed }) => {
    return (
        <div>
            {id} {text} {completed}
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
    return <div>NewTodo</div>;
};
