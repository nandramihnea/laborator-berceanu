import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';

import { ReactComponent as Certification } from '../../assets/icons/certificate.svg';
import { ReactComponent as Contact } from '../../assets/icons/contact.svg';
import { ReactComponent as Price } from '../../assets/icons/tag.svg';

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className="grid content-center w-1/2 h-full">
            <div className={classes.links + ' big-font text-primary-0'}>
                <Card>
                    <Link to='/acreditari' className={classes.link + " grid items-center p-8"} >
                        <Fragment>
                            <Certification />
                            <span>Acreditările laboratorului</span>
                        </Fragment>
                    </Link>
                </Card>
                <Card>
                    <Link to='/lista-preturi' className={classes.link + " grid items-center p-8"} >
                        <Fragment>
                            <Contact />
                            <span>Contact</span>
                        </Fragment>
                    </Link>
                </Card>
                <Card>
                    <Link to='/contact' className={classes.link + " grid items-center p-8"} >
                        <Fragment>
                            <Price />
                            <span>Lista de prețuri</span>
                        </Fragment>
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default Home;
