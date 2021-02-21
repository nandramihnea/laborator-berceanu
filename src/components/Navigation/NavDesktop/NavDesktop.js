import React from 'react'
import NavItems from '../NavItems/NavItems';

import classes from './NavDesktop.module.css';

const NavDesktop = () => {
    return (
        <ul className={classes.navigation + ' mt-8'}>
            <NavItems classes='ml-8 text-primary-4 font-bold tracking-wide' />
        </ul>
    )
}

export default NavDesktop;
