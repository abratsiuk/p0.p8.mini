import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/todos_actions';

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
