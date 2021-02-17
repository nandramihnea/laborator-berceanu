import React from 'react';

import { motion } from "framer-motion";

import classes from './Contact.module.css';

import { ReactComponent as Telephone } from '../../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../../assets/icons/placeholder.svg';

const Contact = () => {
    return (
        <div>
            <a
                href={`tel:${props.phone}`}
                className='grid justify-center items-baseline cursor-auto'>
                    <motion.div
                        className='justify-self-center cursor-pointer'
                        whileHover={{rotateZ: [0, 15, -15, 15, -15, 0]}}
                        transition={{duration: 0.3}}>
                            <Telephone/>
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{props.phone}</p>
            </a>
            <a
                href={`mailto:${props.email}`}
                className='grid justify-center items-baseline cursor-auto'>
                    <motion.div
                        className='justify-self-center cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Mail />
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{props.email}</p>
            </a>
            <a
                href={props.mapCode}
                target="_blank"
                rel="noopener noreferrer"
                className='grid justify-center items-baseline cursor-auto'>
                    <motion.div
                        className='justify-self-center cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Location/>
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{props.address}</p>
            </a>
        </div>
    )
}

export default Contact;
