import React, {useState} from 'react';

import { borzesti, teiului } from '../../assets/contactInfo';

import { motion } from "framer-motion";

import classes from './Hero.module.css';
import ContactWidget from '../Contact/ContactWidget/ContactWidget';

const Hero = () => {
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);

    const spanVariants = {
        visible: {
            opacity: 0,
            scale: 0.2
        },
        hidden: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.55
            }
        }
    }

    return (
        <section className={classes.hero + ' gap-x-1 max-h-screen'} >
            <motion.div
                className={classes.teiului + ' relative grid content-center tracking-widest relative'}
                onMouseEnter={() => setIsFirstHovered(true)}
                onMouseLeave={() => setIsFirstHovered(false)}
                >
                    {isFirstHovered ? <ContactWidget data={teiului} /> : null }
                    {!isFirstHovered ?
                        <motion.span
                            className={classes.name + " text-primary-1 text-3xl sm:text-xl z-20"}
                            variants={spanVariants}
                            initial='visible'
                            animate='hidden' >
                                Teiului
                        </motion.span> : null}
            </motion.div>
            <motion.div
                className={classes.borzesti + ' relative grid content-center tracking-widest relative'}
                onMouseEnter={() => setIsSecondHovered(true)}
                onMouseLeave={() => setIsSecondHovered(false)} >
                    {isSecondHovered ? <ContactWidget data={borzesti} /> : null }
                    {!isSecondHovered ?
                        <motion.span
                            className={classes.name + " text-primary-1 text-3xl sm:text-xl z-20"}
                            variants={spanVariants}
                            initial='visible'
                            animate='hidden' >
                                Sf. Apostoli Petru și Pavel
                        </motion.span> : null}
            </motion.div>
        </section>
    )
}

export default Hero;
