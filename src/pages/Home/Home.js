import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className="grid content-between h-full">
            <div className={classes.links + ' big-font'}>
                <Card>
                    <Link to='/acreditari' className="block p-8">Acreditările laboratorului</Link>
                </Card>
                <Card>
                    <Link to='/lista-preturi' className="block p-8">Lista de prețuri</Link>
                </Card>
                <Card>
                    <Link to='/contact' className="block p-8">Contact</Link>
                </Card>
            </div>
        </div>
    )
}

export default Home;
