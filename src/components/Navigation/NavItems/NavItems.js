import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const NavItems = (props) => {
    const variants = {
        hidden: {
            scale: 1,
            originX: 'center'
        },
        hover: {
            scale: 1.16,
            originX: 'center',
        }
    }

    return (
        <>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <Link to="/lista-preturi" className="text-lg sm:text-base">Prețuri</Link>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <Link to='/' className="text-lg sm:text-base">Contact</Link>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <Link to='/' className="text-lg sm:text-base">Acreditări</Link>
            </motion.li>
        </>
    )
}

export default NavItems;
