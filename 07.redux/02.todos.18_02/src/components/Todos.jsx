import { useSelector } from 'react-redux';
import { selectAllTodos } from '../store/todos/todos_selectors';
import { Todo } from './Todo';

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
