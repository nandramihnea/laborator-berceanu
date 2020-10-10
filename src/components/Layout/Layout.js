import React from 'react';
import { useToggle } from '../../utils';
import SideDrawer from '../SideDrawer/SideDrawer';


import classes from './Layout.module.css';

const Layout = (props) => {
    const [sideDrawerClosed, toggleSideDrawerClosed] = useToggle(false);

    return (
        <div className={classes.layout}>
            <SideDrawer closed={sideDrawerClosed}/>
            <main>
                <button className='p-2 bg-red-400' onClick={toggleSideDrawerClosed}>Close Sidebar</button>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
