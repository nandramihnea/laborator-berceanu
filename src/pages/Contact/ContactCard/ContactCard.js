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
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            className={classes.card}
            variants={contactVariants}
            initial='hidden'
            animate='visible' >
                <div className={classes.cardDetails}>
                    <div className='grid justify-center items-baseline'>
                        <Telephone  className='justify-self-center mb-8'/>
                        <button>
                            <a href={`tel:${props.phone}`}>{props.phone}</a>
                        </button>
                    </div>
                    <div className='grid justify-center items-baseline'>
                        <Mail className='justify-self-center mb-8' />
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </div>
                    <div className='grid justify-center items-baseline'>
                        <Location  className='justify-self-center mb-8'/>
                        <a href={props.mapCode} >{props.address}</a>
                    </div>
                </div>
        </motion.div>
    )
};

export default ContactCard;
