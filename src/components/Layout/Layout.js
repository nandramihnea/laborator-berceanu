import React from 'react';

import Footer from '../Footer/Footer';

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.layout + ' relative bg-primary-0'}>
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
