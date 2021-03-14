import React from 'react';

import { HomeProvider } from '../../context/HomeContext';
import { PreturiProvider } from '../../context/PreturiContext';

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Modal from '../../components/Modal/Modal';
import Navigation from '../../components/Navigation/Navigation';
import Acreditari from '../Acreditari/Acreditari';
import ListaPreturi from '../ListaPreturi/ListaPreturi';
import ListaPreturiFooter from '../../components/Modal/ListaPreturiFooter/ListaPreturiFooter';

import classes from './Home.module.css';

const Home = () => {
    return (
        <HomeProvider>
            <div className={classes.home +  ' relative'}>
                <Navigation />
                <Hero />
                <Acreditari />
                <PreturiProvider>
                    <Modal modalId="listaPreturi" footer={<ListaPreturiFooter />}>
                        <ListaPreturi />
                    </Modal>
                </PreturiProvider>
                <Footer />
            </div>
        </HomeProvider>
    )
}

export default Home;
