import React, {useContext, useState} from 'react';

import { HomeContext } from '../../../context/HomeContext';
import SumarEmptyState from '../../EmptyState/SumarEmptyState/SumarEmptyState';

import {ReactComponent as Delete} from '../../../assets/icons/trash.svg';

import classes from './SumarAnalize.module.css';

const ItemsList = ({element, index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {selectedAnalyzes, setSelectedAnalyzes} = useContext(HomeContext);

    const deleteEntryHandler = (analyze) => {
        const newArray = selectedAnalyzes.filter(item => item.id !== analyze.id);
        setSelectedAnalyzes(newArray, true);
    };

    return (
        <div
            className={classes.row + ' grid justify-between items-baseline mt-1 px-2 cursor-pointer hover:text-primary-5 text-xl sm:text-lg'}
            onClick={() => deleteEntryHandler(element)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
                <span className="text-right">{index + 1}.</span>
                <span className="mx-4 text-lg sm:text-base">{element.name}</span>
                <div>
                    <span>{element.price}</span>
                    <span className={classes.currency + " tracking-tight ml-1"}>RON</span>
                </div>
                {isHovered && <Delete className={classes.svg + ' ml-2'} />}
        </div>
    )
}

const SumarAnalize = () => {
    const {selectedAnalyzes} = useContext(HomeContext);

    let analize = selectedAnalyzes.map((element, index) => {
        return <ItemsList element={element} index={index} key={element.id} />
    });

    return (
        <div>
            {selectedAnalyzes.length > 0 ? analize : <SumarEmptyState />}
        </div>
    )
}

export default SumarAnalize;
