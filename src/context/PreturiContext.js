import React, { useState, createContext, useEffect } from 'react';

export const PreturiContext = createContext({
    isSummaryModalOpened: false,
    isSearch: false,
    listaAnalize: [],
    listaAnalizeFiltered: []
});

export function PreturiProvider({children}) {
    const [isSummaryModalOpened, setIsSummaryModalOpened] = useState(false);
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    const [listaAnalize, setListaAnalize] = useState({});
    const [listaAnalizeFiltered, setListaAnalizeFiltered] = useState({});

    // instantiaza 'listaAnalizeFiltered' cand se populeaza 'listaAnalize'
    useEffect(() => {
        setListaAnalizeFiltered(listaAnalize);
    }, [listaAnalize])

    const toggleIsModalOpened = () => {
        setIsSummaryModalOpened(prevState => !prevState);
    }

    const toggleIsSearchEmpty = () => {
        setIsSearchEmpty(prevState => !prevState);
    }

    return (
        <PreturiContext.Provider value={{
            isSummaryModalOpened: isSummaryModalOpened,
            setIsSummaryModalOpened: toggleIsModalOpened,
            isSearchEmpty: isSearchEmpty,
            setIsSearchEmpty: toggleIsSearchEmpty,
            listaAnalize: listaAnalize,
            setListaAnalize: setListaAnalize,
            listaAnalizeFiltered: listaAnalizeFiltered,
            setListaAnalizeFiltered: setListaAnalizeFiltered
        }}>
                {children}
        </PreturiContext.Provider>
    )
};
