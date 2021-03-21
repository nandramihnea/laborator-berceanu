import React, {useState, useContext, useRef} from 'react';

import {ReactComponent as Icon} from '../../../assets/icons/search.svg';

import classes from './Search.module.css';

import { PreturiContext } from '../../../context/PreturiContext';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {setListaAnalizeFiltered} = useContext(PreturiContext);
    const {listaAnalize} = useContext(PreturiContext);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        let filteredAnlayzes = dynamicSearch(event.target.value);
        setListaAnalizeFiltered(filteredAnlayzes);
    };

    const dynamicSearch = (searchValue) => {
        // toate analizele
        let filteredItems = listaAnalize.map(element => {
            // element = toate analizele dintr-o anumita categorie
            let newArray = element.analyzes.filter(subItem => {
                /*
                    cauta prin 'element' daca exista un item
                    care sa fie egal cu ce e in search input
                */
                let result = subItem.name.toLowerCase().includes(searchValue.toLowerCase());

                return result;
            })
            // destructuez 'element', la care adaug rezultatul filtrarii, cu numele 'analyzes'
            let result = {...element, analyzes: newArray}
            return result;
        });

        return filteredItems;
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
