import React from 'react';

import classes from './ContactCard.module.css';
import ReactCSSTransitionGroup from 'react-transition-group';

import { ReactComponent as Telephone } from '../../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../../assets/icons/placeholder.svg';

const ContactCard = (props) => {
    return (
        <ReactCSSTransitionGroup
        >
            <div className={classes.card}>
                <div className={classes.cardDetails}>
                    <div className='grid justify-center items-baseline'>
                        <Telephone  className='justify-self-center mb-8'/>
                        <button>
                            <a href={`tel:${props.phone}`}>{props.phone}</a>
                        </button>
                    </div>
                    <div className='grid justify-center items-baseline'>
                        <Mail className='justify-self-center mb-8' />
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </div>
                    <div className='grid justify-center items-baseline'>
                        <Location  className='justify-self-center mb-8'/>
                        <a href={props.mapCode} >{props.address}</a>
                    </div>
                </div>
            </div>
        </ReactCSSTransitionGroup>
    )
};

export default ContactCard;
