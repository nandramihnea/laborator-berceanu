import React from 'react';


import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.layout + ' relative bg-primary-0 text-neutral-9'}>
            {props.children}
        </div>
    )
}

export default Layout;
