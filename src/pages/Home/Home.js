import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';

import classes from './Home.module.css';

const Home = () => {
    return (
        <Fragment>
            <Hero />
        </Fragment>
    )
}

export default Home;
