import React, {useContext} from 'react';
import { HashLink } from 'react-router-hash-link';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { HomeContext } from '../../../context/HomeContext';

const NavItems = (props) => {
    const {isContactOpened, setIsContactOpened} = useContext(HomeContext);
    const {isModalOpened, setIsModalOpened} = useContext(HomeContext);


    const handleContactClick = () => {
        setIsContactOpened(isContactOpened);
    }

    const handlePreturiClick = () => {
        setIsModalOpened(isModalOpened);
    }

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
                    <div onClick={handlePreturiClick} className="text-lg sm:text-base cursor-pointer">Prețuri</div>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <div onClick={handleContactClick} className="text-lg sm:text-base cursor-pointer">Contact</div>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <HashLink smooth to="#program" className="text-lg sm:text-base cursor-pointer">Program</HashLink>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <HashLink smooth to='#acreditari' className="text-lg sm:text-base">Acreditări</HashLink>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <HashLink smooth to="#instructiuni-recoltare" className="text-lg sm:text-base cursor-pointer">Cum recoltăm?</HashLink>
            </motion.li>
            <motion.li
                variants={variants}
                initial='hidden'
                whileHover='hover'
                className={props.classes + ' p-4'} >
                    <HashLink smooth to="#rezultate" className="text-lg sm:text-base cursor-pointer">Rezultate</HashLink>
            </motion.li>
        </>
    )
}

export default NavItems;
