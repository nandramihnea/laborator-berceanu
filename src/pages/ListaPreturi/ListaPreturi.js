import React, { useContext, useEffect } from 'react';
import ReactTooltip from "react-tooltip";

import { HomeContext } from '../../context/HomeContext';

import classes from './ListaPreturi.module.css';

const ListaPreturi = () => {
    const {selectedAnalyzes, setSelectedAnalyzes} = useContext(HomeContext);
    const {setListaAnalize} = useContext(HomeContext);
    const {listaAnalizeFiltered} = useContext(HomeContext);

    const mask = {
        1: "Analiză decontată în baza biletului de trimitere de la medicul de familie",
        2: "Analiză decontată în baza biletului de trimitere de la medicul specialist",
        3: "Analiză decontată în baza biletului de trimitere de la medicul de familie sau de la medicul specialist",
        4: "Analiză decontată în baza biletului de trimitere de la medicul de familie (doar pentru femeile gravide) sau de la medicul specialist",
        5: "Microalbuminuria (albumina urinară) și Creatinina urinară = Investigații paraclinice ce pot fi recomandate de medicii de familie, pentru asigurații care au evidențiat pe biletul de trimitere pentru investigații paraclinice management de caz pentru HTA, dislipidemie, diabet zaharat tip 2, astm bronşic, boala cronică respiratorie obstructivă (BPOC) și boala cronică de rinichi, după caz."
    }

    useEffect(() => {
        fetch('listaPreturi.json' ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data) {
                // eslint-disable-next-line
                setListaAnalize(data);
            });
    }, [])

    const onElementClickHandler = (analyze) => {
        if(selectedAnalyzes.length !== 0) {
            if(selectedAnalyzes.includes(analyze)) {
                const newArray = selectedAnalyzes.filter(item => item.id !== analyze.id);
                setSelectedAnalyzes(newArray, true);
            } else {
                setSelectedAnalyzes(analyze);
            }
        } else {
            setSelectedAnalyzes(analyze);
        }
    }

    const priceList = (listaAnalizeFiltered.length ?
        listaAnalizeFiltered.map(type => (
            <div key={type.name} className={classes.list + ' mt-8'}>
                {type.analyzes.length > 0 && <h3 className={classes.header + ' text-primary-5 mr-6 sm:mr-2'}>{type.name}</h3>}
                <div>
                    {type.analyzes.map((analyze) => {
                        let color = '';

                        if(selectedAnalyzes.includes(analyze)) {
                            color = 'text-primary-5 hover:text-primary-5 font-bold';
                        }
                        let row = (
                            <div
                                data-tip={mask[analyze.status]}
                                data-for="tooltip"
                                key={analyze.id}
                                onClick={() => onElementClickHandler(analyze)}
                                className={classes.row + ` gap-x-3 mb-2 hover:text-primary-5 ${color}`}>
                                    <p>{analyze.name}</p>
                                    <div className={classes.price + " grid gap-x-1 text-right items-baseline"}>
                                        <span>{analyze.price}</span>
                                        <span className={classes.currency + " tracking-tight"}>RON</span>
                                    </div>
                            </div>
                        )
                        return row;
                    })}
                </div>
            </div>
        ))
        : <h1>Loading...</h1>
    );

    return (
        <div className={classes.container}>
            <div>
                {priceList}
            </div>
            <ReactTooltip
                className={classes.tooltip}
                id="tooltip"
                place="top"
                type="light" />
        </div>
    )
}

export default ListaPreturi;
