import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import classes from './NavItems.modules.css';

const NavItems = (props) => {
    const variants = {
        hidden: {
            scale: 1,
            originX: 'left'
        },
        hover: {
            scale: 1.2,
            originX: 'left'
        }
    }

    return (
        <>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + classes.li} >
                    <Link to="/lista-preturi" className="text-lg sm:text-base">Prețuri</Link>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + classes.li} >
                    <Link to='/' className="text-lg sm:text-base">Contact</Link>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + classes.li} >
                    <Link to='/' className="text-lg sm:text-base">Acreditări</Link>
            </motion.li>
        </>
    )
}

export default NavItems;
