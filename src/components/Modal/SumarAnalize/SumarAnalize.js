import React, {useContext} from 'react';

import { HomeContext } from '../../../context/HomeContext';

import classes from './SumarAnalize.module.css';

const SumarAnalize = () => {
    const {selectedAnalyzes} = useContext(HomeContext);

    let analize = selectedAnalyzes.map((element, index) => {
        return (
            <div
                className={classes.row + ' grid justify-between mt-1 px-2 cursor-pointer'}
                key={element.id}>
                    <span className="text-right">{index + 1}.</span>
                    <span className="mx-2">{element.name}</span>
                    <span>{element.price}</span>
            </div>
        )
    })

    return (
        <div>
            {analize}
        </div>
    )
}

export default SumarAnalize;
