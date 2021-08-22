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
import Instructiuni from '../Instructiuni/Instructiuni';

import classes from './Home.module.css';
import Program from '../Program/Program';
import Rezultate from '../Rezultate/Rezultate';
import Chestionar from '../Chestionar/Chestionar';

const Home = () => {
    return (
        <HomeProvider>
            <div className={classes.home +  ' relative'}>
                <Navigation />
                <PreturiProvider>
                    <Modal
                        footer={<ListaPreturiFooter />}
                        shouldRenderBackdrop >
                            <ListaPreturi />
                    </Modal>
                </PreturiProvider>
                <Hero />
                <Program />
                <Acreditari />
                <Instructiuni />
                <Rezultate />
                <Chestionar />
                <Footer />
            </div>
        </HomeProvider>
    )
}

export default Home;
