import React from 'react';

import { Link } from 'react-router-dom';

import classes from './NavItems.modules.css';

const NavItems = (props) => {
    return (
        <>
            <li className={props.classes + ' hover:text-green-7'} >
                <Link to="/lista-preturi">Prețuri</Link>
            </li>
            <li className={props.classes + ' hover:text-green-7'} >
                <Link to='/' >Contact</Link>
            </li>
            <li className={props.classes + ' hover:text-green-7'} >
                <Link to='/'>Acreditări</Link>
            </li>
        </>
    )
}

export default NavItems;
