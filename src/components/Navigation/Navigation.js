import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={classes.navigation + ' p-8 z-30 w-3/4 md:w-auto mx-auto md:mx-12 sm:mx-6'}>
            <li className="ml-8 text-primary-4 font-bold tracking-wide">
                <Link to="/lista-preturi">Prețuri</Link>
            </li>
            <li className="ml-8 text-primary-4 font-bold tracking-wide">
                <Link>Contact</Link>
            </li>
            <li className="ml-8 text-primary-4 font-bold tracking-wide">
                <Link>Acreditări</Link>
            </li>
        </ul>
    )
}
export default Navigation;
