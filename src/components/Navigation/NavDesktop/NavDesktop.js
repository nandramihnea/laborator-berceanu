import React from 'react'
import NavItems from '../NavItems/NavItems';

import classes from './NavDesktop.module.css';

const NavDesktop = () => {
    return (
        <ul className={classes.navigation + ' bg-primary-8 rounded-l-full'}>
            <NavItems classes='mx-2 text-primary-0 tracking-wide' />
        </ul>
    )
}

export default NavDesktop;
