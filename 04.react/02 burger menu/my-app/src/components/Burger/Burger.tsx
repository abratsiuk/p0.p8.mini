import React from 'react';
import './Burger.css';
import { IPropsClassName } from '../../interfaces/IPropsClassName.ts';

interface IBurgerProps extends IPropsClassName {}

export const Burger: React.FC<IBurgerProps> = ({ className }) => {
    const classname = `${className} Burger`;

    return <div className={classname}>Burger</div>;
};
