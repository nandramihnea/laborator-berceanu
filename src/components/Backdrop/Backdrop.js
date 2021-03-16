import React, {useContext}  from 'react';
import classes from './Backdrop.module.css';

import { HomeContext } from '../../context/HomeContext';

const Backdrop = () => {
    const {setIsModalOpened} = useContext(HomeContext);

    const handleClick = () => {
        setIsModalOpened(false);
    };

    return (
        <div
            className={classes.backdrop + ' fixed z-40 bg-neutral-9 opacity-70'}
            onClick={handleClick}></div>
    )
}

export default Backdrop
