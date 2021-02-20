import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";

import classes from './Footer.module.css';
import { borzesti, teiului } from '../../assets/contactInfo';

import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

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

    const variants = {
        hidden: {
            // y: 0
        },
        visible: {
            // y: '-100%',
            transition: {
                type: 'tween',
                delay: 0.2
            }
        }
    }

    return (
        <footer
            className={classes.footer + ' relative py-8 bg-primary-0'}>
                { isContactOpened &&
                <motion.div
                    variants={variants}
                    animate={isContactOpened ? 'visible' : 'hidden'}
                    className="w-3/4 md:w-auto mx-auto md:mx-12 sm:mx-6" >
                        <div onClick={handleContactClick} className={classes.arrowWrapper + ' cursor-pointer w-max'}>
                            <div className={classes.arrow + ' transform rotate-180'}></div>
                        </div>
                        <div className={classes.contactWidget + ' grid grid-cols-2 justify-items-center gap-x-4 py-10'} >
                            <Contact data={borzesti}/>
                            <hr className={classes.separator + ' my-6'} />
                            <Contact data={teiului}/>
                        </div>
                </motion.div> }
                <div
                    className='relative w-3/4 md:w-auto mx-auto md:mx-12 sm:mx-6' >
                        <Logo
                            className={classes.logo + ' absolute bottom-0 left-0 cursor-pointer sm:h-12 md:h-14 h-20'}
                            alt="logo"
                            onClick={handleLogoClick} />
                        <div
                            className={classes.contact + ` ${isContactOpened && 'opacity-0 pointer-events-none'} grid items-center w-max cursor-pointer`}
                            onClick={handleContactClick} >
                                <div className={classes.arrow}></div>
                                <div
                                    className={classes.button + ' md:text-4xl text-5xl tracking-widest bold uppercase text-primary-4'}>
                                        Contact
                                </div>
                        </div>
                        <div className={classes.wrapper + " absolute bottom-0 right-0 grid"}>
                            <span className={classes.copyright + " mb-1 md:text-sm text-primary-7"}>© 2021 Laborator Berceanu</span>
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
