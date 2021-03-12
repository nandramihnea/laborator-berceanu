import React, {useEffect, useState, useContext} from 'react';

import {analyzes} from '../../../assets/listaPreturi';

import { PreturiContext } from '../../../context/PreturiContext';
import classes from './Calculator.module.css';

const Calculator = () => {
    const [elementsArray, setElementsArray] = useState([]);
    const {totalPrice, setTotalPrice} = useContext(PreturiContext);
    const {selectedAnalyze} = useContext(PreturiContext);

    useEffect(() => {
        addEntryHandler();
        // eslint-disable-next-line
    }, [selectedAnalyze]);

    const addEntryHandler = (clickedElement) => {
        let price = totalPrice;
        if(Object.keys(selectedAnalyze).length !== 0) {
            if(!elementsArray.includes(selectedAnalyze)) {
                setElementsArray([...elementsArray, selectedAnalyze]);
                price = price + selectedAnalyze.price;
                setTotalPrice(price);
            }
        }
    };

    const deleteEntryHandler = (clickedElement) => {
        const newArray = elementsArray.filter((item, index) => index !== clickedElement);
        setElementsArray(newArray);
        setTotalPrice(totalPrice - elementsArray[clickedElement].price);
    };

    return (
        <div className={classes.container + ' small mt-8 py-20 pl-10 pr-2'}>
            <div className={classes.content}>
                <div className={classes.header + ' grid justify-between mt-1'}>
                    <span>Recoltare</span>
                    <span className="mx-2">8</span>
                </div>
                {elementsArray.map((element, index) => {
                    return (
                        <div
                            className={classes.row + ' grid justify-between mt-1 px-2 cursor-pointer'}
                            key={element.id}
                            onClick={() => deleteEntryHandler(index)}>
                                <span className="text-right">{index + 1}.</span>
                                <span className="mx-2">{element.name}</span>
                                <span>{element.price}</span>
                        </div>
                    )
                })}
            </div>
            <div className="mt-2 p text-right border-black border-t-2 py-4">Total = {totalPrice} RON</div>
        </div>
    )
};

export default Calculator;
