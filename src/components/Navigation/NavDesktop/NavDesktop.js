import React from 'react'
import NavItems from '../NavItems/NavItems';

import classes from './NavDesktop.module.css';

const NavDesktop = () => {
    return (
        <ul className={classes.navigation}>
            <NavItems classes='ml-8 text-primary-4 font-bold tracking-wide mt-8' />
        </ul>
    )
}

export default NavDesktop;
