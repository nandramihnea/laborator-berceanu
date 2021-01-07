import React, { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";

import {analyzes} from '../../assets/listaPreturi';
import Calculator from './Calculator/Calculator';

import classes from './ListaPreturi.module.css';
import ProgressBar from './ProgressBar/ProgressBar';

const ListaPreturi = () => {
    const [selectedElement, setSelectedElement] = useState({});

    const mask = {
        1: "Analiză decontată în baza biletului de trimitere de la medicul de familie",
        2: "Analiză decontată în baza biletului de trimitere de la medicul specialist",
        3: "Analiză decontată în baza biletului de trimitere de la medicul de familie sau de la medicul specialist",
        4: "Analiză decontată în baza biletului de trimitere de la medicul de familie (doar pentru femeile gravide) sau de la medicul specialist",
        5: "Microalbuminuria (albumina urinară) și Creatinina urinară = Investigații paraclinice ce pot fi recomandate de medicii de familie, pentru asigurații care au evidențiat pe biletul de trimitere pentru investigații paraclinice management de caz pentru HTA, dislipidemie, diabet zaharat tip 2, astm bronşic, boala cronică respiratorie obstructivă (BPOC) și boala cronică de rinichi, după caz."
    }

    const onElementClickHandler = (analyze) => {
        setSelectedElement(analyze);
    }

    const priceList = analyzes.map(type => {
        let content = (
            <div key={type.name} className={classes.list + ' mt-8'}>
                <h3 className={classes.header + ' small mr-8'}>{type.name}</h3>
                <div>
                    {type.analyzes.map((analyze) => {
                        let row = (
                            <div
                                data-tip={mask[analyze.status]}
                                data-for="tooltip"
                                key={analyze.id}
                                onClick={() => onElementClickHandler(analyze)}
                                className={classes.row + ' gap-x-3 mb-2 hover:text-primary-5'}>
                                    <p>{analyze.name}</p>
                                    <div className={classes.price + " grid gap-x-1 text-right"}>
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
            <ProgressBar />
            <div>
                {priceList}
            </div>
            <ReactTooltip
                className={classes.tooltip}
                id="tooltip"
                place="top"
                type="light" />
            <Calculator
                selectedElement={selectedElement}
                analyzes={analyzes} />
        </div>
    )
}

export default ListaPreturi;
