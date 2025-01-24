import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../store/todos/todos_selectors';
import { selectFilter } from '../store/filters/filters_selectors';
import { Todo } from './Todo';

export const Todos = () => {
    const activeFilter = useSelector(selectFilter);
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
