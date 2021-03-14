import React, {useContext} from 'react';

import { HomeContext } from '../../../context/HomeContext';
import SumarEmptyState from '../../EmptyState/SumarEmptyState/SumarEmptyState';

import classes from './SumarAnalize.module.css';

const SumarAnalize = () => {
    const {selectedAnalyzes, setSelectedAnalyzes} = useContext(HomeContext);

    const deleteEntryHandler = (analyze) => {
        const newArray = selectedAnalyzes.filter(item => item.id !== analyze.id);
        setSelectedAnalyzes(newArray, true);
    };

    let analize = selectedAnalyzes.map((element, index) => {
        return (
            <div
                className={classes.row + ' grid justify-between mt-1 px-2 cursor-pointer'}
                key={element.id}
                onClick={() => deleteEntryHandler(element)} >
                    <span className="text-right">{index + 1}.</span>
                    <span className="mx-2">{element.name}</span>
                    <span>{element.price}</span>
            </div>
        )
    })

    return (
        <div>
            {selectedAnalyzes.length>0 ? analize : <SumarEmptyState />}
        </div>
    )
}

export default SumarAnalize;
