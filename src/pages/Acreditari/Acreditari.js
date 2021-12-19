import classes from './Acreditari.module.css';
import React from 'react';

import Apostoli from '../../assets/apostoli.pdf';
import Teiului from '../../assets/teiului.pdf';
import coverA from '../../assets/images/apostoli.png';
import coverT from '../../assets/images/teiului.png';

const Acreditari = () => {
    return (
        <section className='md:my-24 my-48 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6' id="acreditari">
            <h1 className="sm:text-xl text-3xl text-primary-4 tracking-wide sm:mb-14 mb-28 mt-24">
                Laboratoarele noastre <br /> sunt acreditate RENAR
            </h1>
            <div className={classes.wrapper + " grid justify-items-center"}>
                <a href={Apostoli} target="_blank" rel="noopener noreferrer">
                    <img
                        src={coverA}
                        alt="acreditare laborator sf. apostoli petru si pavel"
                        className={classes.img} />
                </a>
                <a className="md:mt-4" href={Teiului} target="_blank" rel="noopener noreferrer">
                    <img
                        src={coverT}
                        alt="acreditare laborator teiului"
                        className={classes.img} />
                </a>
            </div>
        </section>
    )
}

export default Acreditari;
