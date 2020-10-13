import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    let sideDrawerStatus = props.closed ? 'closed' : 'open';

    return (
        <div className={[classes.sideDrawer, sideDrawerStatus, "bg-yellow-2 p-6"].join(' ')}>
            <Link to="/acreditari">Acreditari</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/lista-preturi">Lista Preturi</Link>
        </div>
    )
}

export default SideDrawer;
