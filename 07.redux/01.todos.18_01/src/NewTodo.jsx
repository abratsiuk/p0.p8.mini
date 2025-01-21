import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './store';

export const NewTodo = () => {
    const [value, setValue] = useState('');
    const dispatcher = useDispatch();

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type="button"
                value="add"
                onClick={() => {
                    if (value.trim() === '') return;
                    dispatcher(addTodo(value.trim()));
                    setValue('');
                }}
            />
        </div>
    );
};
