import React from 'react';
import { all, active, completed } from '../store/filters_const';
import { Link, useParams } from 'react-router-dom';

export const Filter = () => {
    const { filter: activeFilter = all } = useParams();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
            }}
        >
            <Link
                to={`/${all}`}
                style={{
                    textDecoration: 'none',
                    color: activeFilter === all ? 'red' : 'black',
                }}
            >
                {all}
            </Link>
            <Link
                to={`/${active}`}
                style={{
                    textDecoration: 'none',
                    color: activeFilter === active ? 'red' : 'black',
                }}
            >
                {active}
            </Link>
            <Link
                to={`/${completed}`}
                style={{
                    textDecoration: 'none',
                    color: activeFilter === completed ? 'red' : 'black',
                }}
            >
                {completed}
            </Link>
        </div>
    );
};
