import React from 'react';

import classes from './Contact.module.css';

import Borzesti from './Borzesti/Borzesti';
import Teiului from './Teiului/Teiului';

const Acreditari = () => {
    return (
        <div>
            <div className="grid">
                <Borzesti />
                <Teiului />
            </div>
        </div>
    )
}

export default Acreditari;
