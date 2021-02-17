import React, {useState} from 'react';

import classes from './Footer.module.css';
import { useHistory } from 'react-router-dom';

import { motion } from "framer-motion";

import logo from '../../assets/icons/logo.svg';
import ContactCard from '../../pages/Contact/ContactCard/ContactCard';

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
        <footer className={classes.footer + ' sm:p-3 md:p-6 p-8 md:pt-1 pt-2 bg-primary-0'}>
            {isContactOpened && <ContactCard />}
            <img className="cursor-pointer self-end sm:h-12 md:h-14 h-20" src={logo} alt="logo" onClick={handleLogoClick} />
            <div
                className="grid items-center w-max justify-self-center cursor-pointer"
                onClick={handleContactClick} >
                    <div className={classes.arrow}></div>
                    <div
                        className={classes.button + ' sm:text-3xl md:text-5xl text-6xl tracking-widest bold uppercase text-primary-4'}>
                            Contact
                    </div>
            </div>
            <div className={classes.wrapper + " grid"}>
                <span className={classes.copyright + " mb-1 md:text-sm sm:text-xs text-primary-7"}>© 2021 Laborator Berceanu</span>
                <span className={classes.copyright + " text-xs text-primary-7"}>
                    Created by <a
                                 href="https://www.linkedin.com/in/mihnea-nandra/"
                                 target="_blank" rel="noopener noreferrer"
                                 className="hover:underline">Mihnea NANDRA
                                </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
