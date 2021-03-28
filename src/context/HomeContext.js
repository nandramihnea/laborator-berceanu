import React, { useState, createContext, useEffect } from 'react';

export const HomeContext = createContext({
    isContactOpened: false,
    isModalOpened: false,
    selectedAnalyzes: null,
    totalPrice: 0,
    listaAnalize: [],
    listaAnalizeFiltered: []
});

export function HomeProvider({children}) {
    const [isContactOpened, setIsContactOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [selectedAnalyzes, setSelectedAnalyzes] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [listaAnalize, setListaAnalize] = useState({});
    const [listaAnalizeFiltered, setListaAnalizeFiltered] = useState({});

    function toggleIsContactOpened() {
        setIsContactOpened(prevIsContactOpened => !prevIsContactOpened);
    }

    function toggleIsModalOpened() {
        setIsModalOpened(prevIsModalOpened => !prevIsModalOpened);
    }

    function updateSelectedAnalyzes(selectedAnalyze, isDelete = false) {
        if(isDelete) {
            setSelectedAnalyzes(selectedAnalyze);
        } else {
            setSelectedAnalyzes([...selectedAnalyzes, selectedAnalyze]);
        }
    }

    // instantiaza 'listaAnalizeFiltered' cand se populeaza 'listaAnalize'
    useEffect(() => {
        setListaAnalizeFiltered(listaAnalize);
    }, [listaAnalize])

    useEffect(() => {
        let totalPrice = 0;
        selectedAnalyzes.forEach(analyze => {
            totalPrice = totalPrice + analyze.price;
        })
        setTotalPrice(totalPrice);
    }, [selectedAnalyzes])

    return (
        <HomeContext.Provider value={{
                isContactOpened: isContactOpened,
                setIsContactOpened: toggleIsContactOpened,
                isModalOpened: isModalOpened,
                setIsModalOpened: toggleIsModalOpened,
                selectedAnalyzes: selectedAnalyzes,
                setSelectedAnalyzes: updateSelectedAnalyzes,
                totalPrice: totalPrice,
                listaAnalize: listaAnalize,
                setListaAnalize: setListaAnalize,
                listaAnalizeFiltered: listaAnalizeFiltered,
                setListaAnalizeFiltered: setListaAnalizeFiltered
            }}>
                {children}
        </HomeContext.Provider>
    )
}