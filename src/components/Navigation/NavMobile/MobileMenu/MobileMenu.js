import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

import classes from './MobileMenu.module.css';
import NavItems from '../../NavItems/NavItems';

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const MobileMenu = () => {
    return (
        <AnimatePresence>
            <motion.ul
                className={classes.wrapper + ' p-6 mt-8'}
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='exit' >
                    <NavItems classes='p-2 text-primary-5 font-bold tracking-wide' />
            </motion.ul>
        </AnimatePresence>
    )
}

export default MobileMenu;
