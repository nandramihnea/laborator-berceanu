import React from 'react';
// import { useToggle } from '../../utils';
import SideDrawer from '../SideDrawer/SideDrawer';


import classes from './Layout.module.css';

const Layout = (props) => {
    // const [sideDrawerClosed, toggleSideDrawerClosed] = useToggle(false);

    return (
        <div className={classes.layout}>
            <SideDrawer/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
