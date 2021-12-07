import React from 'react';
import classes from './ThankYou.module.css';

const ThankYou = ({shouldShow}) => {
    return (
        <div
            className={[classes.thankYou, `${!shouldShow ? 'invisible' : undefined}`].join(' ')} >
                <p className="text-primary-0 text-3xl sm:text-lg text-center mb-8">
                    <span role="img" aria-label="rugaicune">🙏</span>
                        Mulțumim pentru răspunsuri
                    <span role="img" aria-label="rugaicune">🙏</span>
                </p>
                <p className="text-primary-0 text-lg sm:text-base text-center mb-8">
                    Vom folosi datele acestea pentru îmbunătățirea calității serviciilor oferite
                </p>
        </div>
    )
}

export default ThankYou
