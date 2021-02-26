import React, {useState} from 'react'

import classes from './Navigation.module.css';
import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';

const Navigation = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const SCREEN_SIZE = 1023;


    const reportWindowSize = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', reportWindowSize);

    return (
        <div className={classes.navigation + " sticky h-24 top-0 flex justify-end items-center z-30 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6"}>
            {screenWidth > SCREEN_SIZE ? <NavDesktop /> : <NavMobile />}
        </div>
    )
}
export default Navigation;
