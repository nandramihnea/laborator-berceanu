import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <Sidebar />
        </div>
    )
}

export default Layout;
