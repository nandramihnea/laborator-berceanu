import React, {useState} from 'react';

import Teiului from '../../pages/Contact/Teiului/Teiului';
import Borzesti from '../../pages/Contact/Borzesti/Borzesti';

import { motion } from "framer-motion";

import classes from './Hero.module.css';

const Hero = () => {
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);

    return (
        <div className={classes.hero + ' md:grid'} >
            <motion.div
                className={classes.teiului + ' grid content-end'}
                onMouseEnter={() => setIsFirstHovered(true)}
                onMouseLeave={() => setIsFirstHovered(false)}
                >
                    <Teiului />
                    {/* {isFirstHovered ? <Teiului /> : null } */}
            </motion.div>
            <div className={classes.delimiter}></div>
            <motion.div
                className={classes.borzesti + ' grid content-end'}
                onMouseEnter={() => setIsSecondHovered(true)}
                onMouseLeave={() => setIsSecondHovered(false)} >
                    {isSecondHovered ? <Borzesti /> : null }
            </motion.div>
        </div>
    )
}

export default Hero;
