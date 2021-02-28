import React from 'react';

import { motion } from "framer-motion";

import classes from './ContactWidget.module.css';

const ContactWidget = (props) => {
    const data = props.data;

    const contactVariants = {
        hidden: {
            scaleY: 0,
            originY: 'top'
        },
        visible: {
            scaleY: 1,
            originY: 'top',
            transition: {
                duration: 0.4
            }
        }
    };

    const ctaVariants = {
        hidden: {
            x: '-100%'
        },
        visible: {
            x: 0,
            skewY: -11,
            transition: {
                duration: 0.55
            }
        }
    }

    const aVariants = {
        visible: {
            scale: 1,
            originX: 'left'
        },
        hovered: {
            scale: 1.2,
            textShadow: '3px 1px 3px rgba(226, 247, 194, 0.77)',
            originX: 'left'
        }
    }

    return (
        <motion.div
            className={classes.card + ' absolute overflow-hidden'}
            variants={contactVariants}
            initial='hidden'
            animate='visible' >
                <div className={classes.cardDetails + ' pt-8 pb-8 z-10'}>
                    <motion.div
                        className={classes.container}
                        variants={ctaVariants} >
                            <div className={classes.content + ' grid'}>
                                <motion.a
                                    href={`tel:${data.phone}`}
                                    className="bold text-2xl md:text-base font-bold text-primary-4 w-max"
                                    variants={aVariants}
                                    initial="visible"
                                    whileHover="hovered" >
                                        SUNĂ <span className="text-base">({data.phone})</span>
                                </motion.a>
                                <div className="flex items-baseline w-max">
                                    <motion.a
                                        href={`mailto:${data.email}`}
                                        className="bold text-2xl md:text-base font-bold text-primary-4 mr-3"
                                        variants={aVariants}
                                        initial="visible"
                                        whileHover="hovered" >
                                            SCRIE
                                    </motion.a>
                                    <span className="text-lg md:text-xs normal-weight text-neutral-9">sau</span>
                                </div>
                                <motion.a
                                    href={data.mapCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bold text-2xl md:text-base font-bold text-primary-4 w-max"
                                    variants={aVariants}
                                    initial="visible"
                                    whileHover="hovered" >
                                        VIZITEAZĂ-NE
                                </motion.a>
                            </div>
                    </motion.div>
                </div>
        </motion.div>
    )
};

export default ContactWidget;
