import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar + " bg-yellow-200 p-6"}>
            <Link to="/acreditari">Acreditari</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/lista-preturi">Lista Preturi</Link>
        </div>
    )
}

export default Sidebar;
