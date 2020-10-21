import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card + ' bg-primary-3 hover:bg-primary-2 cursor-pointer text-center'}>
            {props.children}
        </div>
    )
}

export default Card;
