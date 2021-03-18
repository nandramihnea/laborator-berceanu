import React, {useContext, useEffect} from 'react';
import classes from './Modal.module.css';

import { HomeContext } from '../../context/HomeContext';
import { PreturiContext } from '../../context/PreturiContext';

import { ReactComponent as Back } from '../../assets/icons/back.svg';

import Backdrop from '../Backdrop/Backdrop';
import Search from '../../pages/ListaPreturi/Search/Search';

const Modal = (props) => {
    const {isModalOpened, setIsModalOpened} = useContext(HomeContext);
    const {isSummaryModalOpened, setIsSummaryModalOpened} = useContext(PreturiContext);

    useEffect(() => {
        if(isModalOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpened])

    const handleCloseClick = (event) => {
        setIsModalOpened(false);
    }

    const handleBackClick = () => {
        setIsSummaryModalOpened(false);
    }

    return (
        isModalOpened ?
            <>
                {props.shouldRenderBackdrop && <Backdrop />}
                <div id={props.modalId} className={classes.wrapper + ' fixed z-50'}>
                    <div className={classes.header + ` w-full grid justify-between items-center px-8 py-6 sm:p-4`}>
                        {isSummaryModalOpened &&
                            <button
                                className={classes.icon + ' focus:outline-none'}
                                onClick={handleBackClick} >
                                    <Back />
                            </button>}
                        {!isSummaryModalOpened && <Search />}
                        <div onClick={handleCloseClick} className={classes.close + ' justify-self-end'}></div>
                    </div>
                    <div className={classes.modal + ' px-8 sm:px-2 mb-3'}>
                        {props.children}
                    </div>
                    {props.footer && props.footer}
                </div>
            </> : null
    )
}

export default Modal;