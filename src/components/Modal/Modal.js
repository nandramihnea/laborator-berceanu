import React, {useContext, useEffect} from 'react';
import classes from './Modal.module.css';

import { HomeContext } from '../../context/HomeContext';

import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    const {isModalOpened, setIsModalOpened} = useContext(HomeContext);

    useEffect(() => {
        if(isModalOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpened])

    const handleClick = (event) => {
        console.log(`event.target`, event.target)
        setIsModalOpened(false);
    }

    return (
        isModalOpened ?
            <>
                <Backdrop />
                <div id={props.modalId} className={classes.wrapper + ' fixed z-50'}>
                    <div className="w-full flex justify-end p-6">
                        <div onClick={(event) => handleClick(event)} className={classes.close}></div>
                    </div>
                    <div className={classes.modal + ' px-8 mb-3'}>
                        {props.children}
                    </div>
                    {props.footer && props.footer}
                </div>
            </> : null
    )
}

export default Modal;