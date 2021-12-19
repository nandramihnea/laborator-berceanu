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
import Program from '../Program/Program';
import Rezultate from '../Rezultate/Rezultate';
import Chestionar from '../Chestionar/Chestionar';
import Seo from '../../components/Seo/Seo';

import classes from './Home.module.css';


const Home = () => {
    return (
        <>
            <Seo
                title='Laborator Clinic Dr. Berceanu | Analize Laborator Timisoara | Antigen & Anticorpi pentru COVID'
                description='Cauți un loc unde îți poți face un set de analize medicale de calitate la un preț rezonabil în Timișoara?
                Laborator Clinic Dr. Berceanu | zona LIPOVEI | zona Dacia'
                canonUrl='https://www.laboratorberceanu.ro/'
                ogUrl='https://www.laboratorberceanu.ro/'
                ogType='website'
                ogDescription='Cauți un loc unde îți poți face un set de analize medicale de calitate la un preț rezonabil în Timișoara?
                Laborator Clinic Dr. Berceanu | zona LIPOVEI | zona Dacia'
                ogImage='/src/assets/icons/logoFull.svg'
                ogAlt='Laborator Clinic Dr. Berceanu' >
            </Seo>
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
        </>
    )
}

export default Home;
