import React from 'react';

import { motion } from "framer-motion";

import { ReactComponent as Telephone } from '../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../assets/icons/placeholder.svg';
import classes from './Contact.module.css';

const Contact = (props) => {
    const data = props.data;

    return (
        <div className={classes.wrapper}>
            <a
                href={data.mapCode}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.row + ' grid cursor-auto py-4 md:py-3 sm:py-2'}>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Location className={classes.svg} />
                    </motion.div>
                    <p className="text-xl md:text-base sm:text-sm cursor-pointer ml-8">{data.address}</p>
            </a>
            <a
                href={`tel:${data.phone}`}
                className={classes.row + ' grid cursor-auto py-4 md:py-3 sm:py-2'}>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{rotateZ: [0, 15, -15, 15, -15, 0]}}
                        transition={{duration: 0.3}}>
                            <Telephone className={classes.svg} />
                    </motion.div>
                    <p className="text-xl md:text-base sm:text-sm cursor-pointer ml-8">{data.phone}</p>
            </a>
            <a
                href={`mailto:${data.email}`}
                className={classes.row + ' grid cursor-auto py-4 md:py-3 sm:py-2'}>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Mail className={classes.svg} />
                    </motion.div>
                    <p className="text-xl md:text-base sm:text-sm cursor-pointer ml-8">{data.email}</p>
            </a>
        </div>
    )
}

export default Contact;
