import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";

import classes from './Footer.module.css';
import logo from '../../assets/icons/logo.svg';
import { borzesti, teiului } from '../../assets/contactInfo';

import Contact from '../Contact/Contact';

const Footer = () => {
    let history = useHistory();
    const [isContactOpened, setIsContactOpened] = useState(false);

    const handleLogoClick = () => {
        history.push('/');
    }

    const handleContactClick = () => {
        setIsContactOpened(!isContactOpened);
    }

    return (
        <footer className={classes.footer + ' z-10 relative sm:p-3 md:p-6 p-8 md:pt-1 pt-2 bg-primary-0'}>
            {isContactOpened && <div>
                <div onClick={handleContactClick} className={classes.arrowWrapper + ' cursor-pointer w-max'}>
                    <div className={classes.arrow + ' transform rotate-180'}></div>
                </div>
                <div className='grid grid-cols-2 justify-items-center gap-x-4 py-10'>
                    <Contact data={borzesti}/>
                    <Contact data={teiului}/>
                </div>
            </div>}
            <div
                className={classes.actualFooter + ' relative'} >
                    <img
                        className={classes.logo + " absolute bottom-0 left-0 cursor-pointer sm:h-12 md:h-14 h-20"}
                        src={logo}
                        alt="logo"
                        onClick={handleLogoClick} />
                    <div
                        className={classes.contact + ` ${isContactOpened && 'opacity-0 pointer-events-none'} grid items-center w-max cursor-pointer`}
                        onClick={handleContactClick} >
                            <div className={classes.arrow}></div>
                            <div
                                className={classes.button + ' sm:text-3xl md:text-5xl text-6xl tracking-widest bold uppercase text-primary-4'}>
                                    Contact
                            </div>
                    </div>
                    <div className={classes.wrapper + " absolute bottom-0 right-0 grid"}>
                        <span className={classes.copyright + " mb-1 md:text-sm sm:text-xs text-primary-7"}>© 2021 Laborator Berceanu</span>
                        <span className={classes.copyright + " text-xs text-primary-7"}>
                            Created by <a
                                        href="https://www.linkedin.com/in/mihnea-nandra/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="hover:underline">Mihnea NANDRA
                                        </a>
                        </span>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;
