import React, {useContext}  from 'react';
import classes from './Backdrop.module.css';

import {HomeContext} from '../../context/HomeContext';

const Backdrop = () => {
    const {isModalOpened, setIsModalOpened} = useContext(HomeContext);

    const handleClick = () => {
        setIsModalOpened(false);
    };

    return (
        isModalOpened ?
            <div
                className={classes.backdrop + ' fixed z-40 bg-neutral-9 opacity-80'}
                onClick={handleClick}></div>
            : null
    )
}

export default Backdrop
