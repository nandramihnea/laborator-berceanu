import React from 'react';

import {analyzes} from '../../assets/listaPreturi';

import classes from './ListaPreturi.module.css';

const ListaPreturi = () => {
    const obj = {
        1: 'Decontat cu trimitere de la Medicul de Familie',
        2: 'Decontat cu trimitere de la Medicul Specialist',
        3: 'Decontat cu trimitere de la Medicul de Familie sau Medicul Specialist',
        4: 'Decontat cu trimitere de la Medicul de Familie (in cazul femeilor gravide) sau Medicul Specialist',
    }

    const priceList = analyzes.map(type => {
        let content = (
            <div key={type.name} className={classes.list}>
                <h3 className={classes.header + ' mr-5'}>{type.name}</h3>
                <div>
                    {type.analyzes.map(analyze => {
                        let row = (
                            <div key={analyze.id} className={classes.row}>
                                <p>{analyze.name}</p>
                                <span>{obj[analyze.status]}</span>
                                <div className="grid grid-cols-2 gap-x-1 text-right">
                                    <span>{analyze.price}</span>
                                    <span>Lei</span>
                                </div>
                            </div>
                        )
                        return row;
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
