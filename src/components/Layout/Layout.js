import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useToggle } from '../../utils';

import logo from '../../assets/images/logo.png';

import classes from './Layout.module.css';

const Layout = (props) => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className={classes.layout}>
            <main className='p-10'>
                {props.children}
            </main>
            <footer className={classes.footer + ' p-10'}>
                <img className="cursor-pointer" src={logo} alt="logo" onClick={handleClick} />
                <span className={classes.copyright + " caption text-primary-7"}>© 2020 Laborator Berceanu</span>
            </footer>
        </div>
    )
}

export default Layout;
