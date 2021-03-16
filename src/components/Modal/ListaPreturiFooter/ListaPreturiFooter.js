import React, {useContext} from 'react';
import { HomeContext } from '../../../context/HomeContext';

import SumarAnalize from '../SumarAnalize/SumarAnalize';
import Modal from '../Modal';

import classes from './ListaPreturiFooter.module.css';
import SumarAnalizeFooter from '../SumarAnalizeFooter/SumarAnalizeFooter';
import { PreturiContext } from '../../../context/PreturiContext';

const ListaPreturiFooter = () => {
    const {totalPrice} = useContext(HomeContext);
    const {selectedAnalyzes} = useContext(HomeContext);
    const {isSummaryModalOpened, setIsSummaryModalOpened} = useContext(PreturiContext);

    const handleButtonClick = () => {
        setIsSummaryModalOpened(true);
    }

    return (
        <div className={classes.footer + ' grid p-6 sm:py-3 sm:px-0 items-center'}>
            <div className="block">
                <span className="tracking-wider">TOTAL: </span>
                <span className="text-2xl font-bold text-primary-6 ml-2">{totalPrice}</span>
                <span className="text-sm text-primary-6 ml-1 tracking-tight">RON</span>
            </div>
            {selectedAnalyzes.length > 0 &&
                <button
                    className="p-4 sm:p-3 bg-primary-7 text-primary-0 rounded-md text-sm sm:text-xs tracking-wider"
                    onClick={handleButtonClick} >
                        SUMAR ANALIZE
                </button>
            }
            {isSummaryModalOpened &&
                <Modal
                    footer={<SumarAnalizeFooter />} >
                        <SumarAnalize />
                </Modal> }
        </div>
    )
}

export default ListaPreturiFooter
