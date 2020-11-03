import React from 'react';

import {analyzes} from '../../assets/listaPreturi';

import classes from './ListaPreturi.module.css';

const ListaPreturi = () => {
    const priceList = analyzes.map(type => {
        let content = (
            <div key={type.name} className={classes.list}>
                <h3 className={classes.header + ' mr-5'}>{type.name}</h3>
                <div>
                    {type.analyzes.map(analyze => {
                        return <p key={analyze.id}>{analyze.name}</p>
                    })}
                </div>
            </div>
        );
        return content;
    });

    return (
        <div className={classes.container}>
            {priceList}
        </div>
    )
}

export default ListaPreturi;
