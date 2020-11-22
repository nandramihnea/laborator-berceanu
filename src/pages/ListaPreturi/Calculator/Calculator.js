import React, {useEffect, useState} from 'react';
import classes from './Calculator.module.css';

const Calculator = (props) => {
    const [elementsArray, setElementsArray] = useState([]);


    useEffect(() => {
        if(Object.keys(props.selectedElement).length !== 0) {
            setElementsArray([...elementsArray, props.selectedElement]);
        }
    }, [props.selectedElement]);

    return (
        <div className={classes.container + ' small mt-8 py-4 px-6'}>
            {elementsArray.map(element => {
                return (
                    <div className={classes.row + ' grid justify-between'} key={element.id}>
                        <span>{element.name}</span>
                        <span>{element.price}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default Calculator;
