import React, {useContext} from 'react';
import { HomeContext } from '../../../context/HomeContext';
import { PreturiContext } from '../../../context/PreturiContext';

import classes from './SumarAnalizeFooter.module.css';

const SumarAnalizeFooter = () => {
    const {totalPrice} = useContext(HomeContext);
    const {selectedAnalyzes} = useContext(HomeContext);
    const {isSummaryModalOpened, setIsSummaryModalOpened} = useContext(PreturiContext);
    console.log("🚀 ~ file: SumarAnalizeFooter.js ~ line 11 ~ SumarAnalizeFooter ~ isSummaryModalOpened", isSummaryModalOpened)

    const handleButtonClick = () => {
        
    }

    return (
        <div className={classes.footer + ' grid p-6 items-baseline'}>
            <div className="block">
                <span className="tracking-wider">TOTAL: </span>
                <span className="text-2xl font-bold text-primary-6 ml-2">{totalPrice}</span>
                <span className="text-sm text-primary-6 ml-1 tracking-tight">RON</span>
            </div>
            {selectedAnalyzes.length > 0 &&
                <button
                    className="px-4 py-4 bg-primary-7 text-primary-0 rounded-md text-sm tracking-wider"
                    onClick={handleButtonClick} >
                        DESCARCA SUMARUL ANALIZELOR
                </button>
            }
        </div>
    )
}

export default SumarAnalizeFooter;
