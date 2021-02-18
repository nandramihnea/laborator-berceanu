import React, {useState} from 'react';

import { borzesti, teiului } from '../../assets/contactInfo';

import { motion } from "framer-motion";

import classes from './Hero.module.css';
import ContactWidget from '../Contact/ContactWidget/ContactWidget';

const Hero = () => {
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);

    return (
        <div className={classes.hero + ' md:grid gap-x-1'} >
            <motion.div
                className={classes.teiului + ' grid content-end'}
                onMouseEnter={() => setIsFirstHovered(true)}
                onMouseLeave={() => setIsFirstHovered(false)}
                >
                    {isFirstHovered ? <ContactWidget data={teiului} /> : null }
            </motion.div>
            <motion.div
                className={classes.borzesti + ' grid content-end'}
                onMouseEnter={() => setIsSecondHovered(true)}
                onMouseLeave={() => setIsSecondHovered(false)} >
                    {isSecondHovered ? <ContactWidget data={borzesti} /> : null }
            </motion.div>
        </div>
    )
}

export default Hero;
