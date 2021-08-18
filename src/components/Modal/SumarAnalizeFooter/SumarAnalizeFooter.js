import React, {useContext} from 'react';
import { HomeContext } from '../../../context/HomeContext';

import classes from './SumarAnalizeFooter.module.css';

const SumarAnalizeFooter = () => {
    const {totalPrice} = useContext(HomeContext);
    const {selectedAnalyzes} = useContext(HomeContext);

    return (
        <div className={classes.footer + ' grid p-6 sm:py-4 sm:px-0 items-center'}>
            <div className="block">
                <span className="tracking-wider">TOTAL: </span>
                <span className="text-2xl font-bold text-primary-6 ml-2">{totalPrice}</span>
                <span className="text-sm text-primary-6 ml-1 tracking-tight">RON</span>
            </div>
            {/* {selectedAnalyzes.length > 0 &&
                <button
                    className="p-4 sm:p-3 bg-primary-7 text-primary-0 rounded-md text-sm sm:text-xs tracking-wider"
                    onClick={handleButtonClick} >
                        DESCARCĂ LISTA
                </button>
            } */}
        </div>
    )
}

export default SumarAnalizeFooter;
