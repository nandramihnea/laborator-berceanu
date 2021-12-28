import React from 'react'
import classes from './Program.module.css';
import { ReactComponent as Clock } from '../../assets/icons/watch.svg';

const Program = () => {
    return (
        <section id="program" className={classes.section + ' bg-primary-3 relative'}>
            <Clock className={classes.icon} />
            <div className='md:mb-14 mb-24 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6'>
                <h1 className="pb-28 md:pb-20 sm:pb-14 pt-24 md:pt-16 sm:pt-12 sm:mx-6 sm:text-xl text-3xl text-neutral-0 tracking-wide text-right">
                    Program de lucru
                </h1>
                <div className={classes.wrapper + ' pb-20'}>
                    <div className={classes.margin}>
                        <p className={classes.name + " text-lg md:text-base mb-8 text-neutral-0"}>Strada Teiului</p>
                        <div className={classes.date + " text-2xl md:text-xl mb-10 text-neutral-0"}>
                            <span>Luni - Vineri</span>
                            <span>7 — 15</span>
                        </div>
                        <div className={classes.date + " text-lg md:text-base mb-4 text-neutral-0 opacity-90"}>
                            <span>* Program recoltare</span>
                            <span>7 — 11</span>
                        </div>
                    </div>
                    <div>
                        <p className={classes.name + " text-lg md:text-base mb-8 text-neutral-0"}>Strada Sfinții Apostoli Petru și Pavel</p>
                        <div className={classes.date + " text-2xl md:text-xl mb-10 text-neutral-0"}>
                            <span>Luni - Vineri</span>
                            <span>8 — 16</span>
                        </div>
                        <div className={classes.date + " text-lg md:text-base mb-4 text-neutral-0 opacity-90"}>
                            <span>* Program recoltare</span>
                            <span>8 — 10:30</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Program
