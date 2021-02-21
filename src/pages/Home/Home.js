import React, { Fragment } from 'react';

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Acreditari from '../Acreditari/Acreditari';
import ListaPreturi from '../ListaPreturi/ListaPreturi';

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <Hero />
            <Acreditari />
            <ListaPreturi />
            <Footer />
        </div>
    )
}

export default Home;
