import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import classes from './NavMobile.module.css';

import { motion } from "framer-motion";
import MobileMenu from './MobileMenu/MobileMenu';

const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="#FFEEEE"
      strokeLinecap="round"
      {...props}
    />
);

const NavMobile = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <motion.div
            className={classes.navigation + ' w-max my-4'}
            initial={false}
            animate={isOpened ? "open" : "closed"} >
                <button
                    className={classes.button + ' bg-green-8 p-5 cursor-pointer focus:outline-none'}
                    onClick={() => setIsOpened(!isOpened)}>
                        <svg width="23" height="19" className={classes.svg} viewBox="0 0 23 19">
                            <Path
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" }
                                }}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346" },
                                    open: { d: "M 3 2.5 L 17 16.346" }
                                }}
                            />
                        </svg>
                </button>
                {isOpened && <MobileMenu />}
        </motion.div>
    )
}

export default NavMobile;
