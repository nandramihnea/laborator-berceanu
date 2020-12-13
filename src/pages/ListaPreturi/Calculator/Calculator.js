import React, {useEffect, useState} from 'react';
import classes from './Calculator.module.css';

const Calculator = (props) => {
    const [elementsArray, setElementsArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(8);

    useEffect(() => {
        let price = totalPrice;
        if(Object.keys(props.selectedElement).length !== 0) {
            if(!elementsArray.includes(props.selectedElement)) {
                setElementsArray([...elementsArray, props.selectedElement]);
                price = price + props.selectedElement.price;
                setTotalPrice(price);
            }
        }
    }, [props.selectedElement]);

    const deleteEntryHandler = (clickedElement) => {
        const newArray = elementsArray.filter((item, index) => index !== clickedElement);
        setElementsArray(newArray);
        setTotalPrice(totalPrice - elementsArray[clickedElement].price);
    };

    return (
        <div className={classes.container + ' small mt-8 py-20 px-6'}>
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
