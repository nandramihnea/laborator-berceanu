import React from 'react';

import classes from './ContactCard.module.css';

import { ReactComponent as Telephone } from '../../../assets/icons/smartphone.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg';
import { ReactComponent as Location } from '../../../assets/icons/placeholder.svg';

const ContactCard = (props) => {
    return (
        <div className={classes.card + ' mb-24  ' + props.position}>
            <p className={classes.header + " relative huge-font py-2 " + `${props.inverse ? props.inverse : ''}`}>{props.name}</p>
            <div className={classes.cardDetails}>
                <div className='grid justify-center'>
                    <Telephone  className='justify-self-center mb-8'/>
                    <button>
                        <a href={`tel:${props.phone}`}>{props.phone}</a>
                    </button>
                </div>
                <div className='grid justify-center'>
                    <Mail className='justify-self-center mb-8' />
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                <div className='grid justify-center'>
                    <Location  className='justify-self-center mb-8'/>
                    <a href={props.mapCode} >{props.address}</a>
                </div>
            </div>
            {/* <div className='grid my-6'>
                <div className={classes.map}>
                    <iframe
                        width="500"
                        height="300"
                        frameBorder="0"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD562ghCtUd0avQ6RsspZ90tTGFL6-KCH4
                        &q=${props.mapCode}`}
                        allowFullScreen >
                    </iframe>
                </div>
            </div> */}
        </div>
    )
};

export default ContactCard;
