import { useSelector } from 'react-redux';
import { Todo } from './Todo';

export const Todos = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="Todos">
            {todos.map((t) => (
                <Todo
                    key={t.id}
                    {...t}
                />
            ))}
        </div>
    );
};
