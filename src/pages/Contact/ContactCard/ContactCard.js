import React from 'react';

import { motion } from "framer-motion";

import classes from './ContactCard.module.css';

import { ReactComponent as Telephone } from '../../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../../assets/icons/placeholder.svg';

const ContactCard = (props) => {
    const contactVariants = {
        hidden: {
            scaleY: 0
        },
        visible: {
            scaleY: 1,
            originY: 'bottom',
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <motion.div
            className={classes.card}
            variants={contactVariants}
            initial='hidden'
            animate='visible' >
                <div className={classes.cardDetails + ' pt-20 z-10'}>
                    <a
                        href={`tel:${props.phone}`}
                        className='grid justify-center items-baseline cursor-pointer'>
                            <motion.div
                                className='justify-self-center mb-8'
                                whileHover={{rotateZ: [0, 20, -20, 20, -20, 0]}}
                                transition={{duration: 0.3}}>
                                    <Telephone/>
                            </motion.div>
                            <motion.p whileHover={{scale: 1.2}}>{props.phone}</motion.p>
                    </a>
                    <a
                        href={`mailto:${props.email}`}
                        className='grid justify-center items-baseline cursor-pointer'>
                            <motion.div
                                className='justify-self-center mb-8'
                                whileHover={{scale: 1.2}}>
                                    <Mail />
                            </motion.div>
                            <motion.p whileHover={{scale: 1.2}}>{props.email}</motion.p>
                    </a>
                    <a
                        href={props.mapCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='grid justify-center items-baseline cursor-pointer'>
                            <motion.div
                                className='justify-self-center mb-8'
                                whileHover={{scale: 1.2}}>
                                    <Location/>
                            </motion.div>
                            <motion.p whileHover={{scale: 1.2}}>{props.address}</motion.p>
                    </a>
                </div>
        </motion.div>
    )
};

export default ContactCard;
