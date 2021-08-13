import React from 'react'
import NavItems from '../NavItems/NavItems';

import classes from './NavDesktop.module.css';

const NavDesktop = () => {
    return (
        <ul className={classes.navigation + ' bg-green-8 rounded-l-full'}>
            <NavItems classes='mx-4 text-primary-0 tracking-wide' />
        </ul>
    )
}

export default NavDesktop;
