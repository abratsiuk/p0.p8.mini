import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../store/todos/todos_selectors';
import { Todo } from './Todo';
import { useParams } from 'react-router-dom';

export const Todos = () => {
    const { filter: activeFilter } = useParams();
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );
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
