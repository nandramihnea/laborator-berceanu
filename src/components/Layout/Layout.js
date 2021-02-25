import React from 'react';

import classes from './Layout.module.css';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

const Layout = (props) => {
    return (
        <div className={classes.layout + ' relative text-neutral-9'}>
            <Logo className={classes.logo} />
            {props.children}
        </div>
    )
}

export default Layout;
