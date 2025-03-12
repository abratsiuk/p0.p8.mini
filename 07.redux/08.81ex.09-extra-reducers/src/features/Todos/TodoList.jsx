import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectVisibleTodos,
    toggleTodo,
    removeTodo,
    getTodos,
} from './todos-slice';

export const TodoList = () => {
    const activeFilter = useSelector((state) => state.filter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

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
