import React, {useContext} from 'react';
import { PreturiContext } from '../../../context/PreturiContext';


const SumarEmptyState = () => {
    const {setIsSummaryModalOpened} = useContext(PreturiContext);

    const handleClick = () => {
        setIsSummaryModalOpened(false);
    }

    return (
        <div className="grid justify-items-center">
            <h1 className="text-3xl text-primary-5 py-10">Ohh... Nu ai selectat niciun tip de analiză</h1>
            <p className="pb-10">
                Mergi <span
                        className="font-bold hover:text-primary-5 cursor-pointer"
                        onClick={handleClick}>înapoi</span> și adaugă analize în lista ta de analize
            </p>
        </div>
    )
}

export default SumarEmptyState;
