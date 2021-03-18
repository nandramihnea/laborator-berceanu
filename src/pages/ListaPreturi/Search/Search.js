import React, {useState} from 'react';

import {ReactComponent as Icon} from '../../../assets/icons/search.svg';

import classes from './Search.module.css';

import {analyzes} from '../../../assets/listaPreturi';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        dynamicSearch();
    };

    const dynamicSearch = () => {
        let result = analyzes.map(item => {
            let filteredItems = item.analyzes.filter(element => {
                let res = element.name.toLowerCase().includes(searchTerm.toLowerCase());

                return res;
            })
            return filteredItems;
        });

        console.log(`result`, result)
        return result;
    }

    return (
        <div className={classes.search + " grid items-center"}>
            <Icon className={classes.icon} />
            <input
                className={classes.input + ' text-2xl sm:text-lg font-light tracking-wider bg-primary-0 ml-6 focus:outline-none'}
                type='text'
                value={searchTerm}
                onChange={e => handleChange(e)}
                placeholder='caută analizele dorite'
                autoFocus />
        </div>
    )
}

export default Search;
