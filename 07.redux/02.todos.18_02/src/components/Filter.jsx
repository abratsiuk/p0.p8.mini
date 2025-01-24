import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../store/filters/filters_selectors';
import { filter } from '../store/filters/filters_actions';
import { all, active, completed } from '../store/filters/filters_const';

export const Filter = () => {
    const activeFilter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <ul
            style={{
                display: 'flex',
                justifyContent: 'center',
                listStyle: 'none',
                gap: '10px',
            }}
        >
            <li
                style={{ color: activeFilter === all ? 'red' : 'black' }}
                onClick={() => dispatch(filter(all))}
            >
                {all}
            </li>
            <li
                style={{ color: activeFilter === active ? 'red' : 'black' }}
                onClick={() => dispatch(filter(active))}
            >
                {active}
            </li>
            <li
                style={{
                    color: activeFilter === completed ? 'red' : 'black',
                }}
                onClick={() => dispatch(filter(completed))}
            >
                {completed}
            </li>
        </ul>
    );
};
