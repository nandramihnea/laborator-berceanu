import React from 'react';

import Footer from '../Footer/Footer';

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
