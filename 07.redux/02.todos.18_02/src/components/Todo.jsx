import { useDispatch } from 'react-redux';
import {
    toggleTodo,
    updateTodo,
    deleteTodo,
} from '../store/todos/todos_actions';

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
