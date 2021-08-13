import React from 'react';
import classes from './Rezultate.module.css';

import source from '../../assets/images/login.png';

const Rezultate = () => {
    return (
        <section id="rezultate" className='md:my-18 my-24 w-4/5 md:w-auto mx-auto md:mx-12 sm:mx-6'>
            <p className="sm:text-xl text-3xl text-primary-4 tracking-wide sm:mb-8 mb-16">
                Cum accesăm rezultatele analizelor?
            </p>
            <div className={classes.wrapper}>
                <div className={classes.text}>
                    <p>
                        <span className="font-serif text-6xl sm:text-4xl text-primary-3">1. </span>
                        Pentru a vizualiza rezultatele analizelor, accesați pagina
                        <a
                            href="https://www.rezultateanalize.ro"
                            target="_blank"
                            className={classes.link + ' ml-2 text-primary-3 font-bold'}>
                                www.rezultateanalize.ro
                        </a>
                    </p>
                    <p>
                        <span className="font-serif text-6xl sm:text-4xl text-primary-3">2. </span>
                        În rubrica <span className="italic text-primary-3">Logare pacienti</span>, introduceți datele dumneavoastră</p>
                    <p><span className="font-bold text-primary-3 ml-12 md:ml-6">* Codul de securitate</span> îl primiți după efectuarea analizelor</p>
                </div>
                <img className={classes.img + " opacity-75"} src={source} alt="login" />
            </div>
        </section>
    )
}

export default Rezultate
