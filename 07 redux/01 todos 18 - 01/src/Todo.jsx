import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from './store';

export const Todo = ({ id, text, completed }) => {
    const dispatcher = useDispatch();

    return (
        <div className="Todo">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                    dispatcher(toggleTodo(id));
                }}
            />
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    dispatcher(updateTodo(id, e.target.value));
                }}
            />
            <button onClick={() => dispatcher(removeTodo(id))}>remove</button>
        </div>
    );
};
