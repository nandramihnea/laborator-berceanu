import React from 'react';

import { motion } from "framer-motion";

import { ReactComponent as Telephone } from '../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../assets/icons/placeholder.svg';

const Contact = (props) => {
    const data = props.data;

    return (
        <div>
            <a
                href={data.mapCode}
                target="_blank"
                rel="noopener noreferrer"
                className='grid grid-cols-2 cursor-auto'>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Location/>
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{data.address}</p>
            </a>
            <a
                href={`tel:${data.phone}`}
                className='grid grid-cols-2 cursor-auto'>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{rotateZ: [0, 15, -15, 15, -15, 0]}}
                        transition={{duration: 0.3}}>
                            <Telephone/>
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{data.phone}</p>
            </a>
            <a
                href={`mailto:${data.email}`}
                className='grid grid-cols-2 cursor-auto'>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{scale: 1.2}}>
                            <Mail />
                    </motion.div>
                    <p className="text-sm md:text-xs cursor-pointer">{data.email}</p>
            </a>
        </div>
    )
}

export default Contact;
