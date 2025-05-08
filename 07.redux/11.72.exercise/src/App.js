import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    selectVisibleTodos,
    toggleTodo,
    setFilter,
} from './store';

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux Todo</h1>
            <NewTodo />
            <FilterTodo />
            <TodoList />
        </div>
    );
}

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="new todo"
            />
            <input
                type="submit"
                value="Add Todo"
            />
        </form>
    );
};

const TodoList = () => {
    const filter = useSelector((state) => state.filter);
    const todos = useSelector((state) => selectVisibleTodos(state, filter));

    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{' '}
                    {todo.title}{' '}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

const FilterTodo = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(setFilter('all'))}
                style={{ color: filter === 'all' ? 'red' : null }}
            >
                all
            </button>
            <button
                onClick={() => dispatch(setFilter('active'))}
                style={{ color: filter === 'active' ? 'red' : null }}
            >
                active
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                style={{ color: filter === 'completed' ? 'red' : null }}
            >
                completed
            </button>
        </div>
    );
};
