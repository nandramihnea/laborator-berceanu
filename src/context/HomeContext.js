import React, { useState, createContext, useEffect } from 'react';

export const HomeContext = createContext({
    isContactOpened: false,
    isModalOpened: false,
    selectedAnalyzes: null,
    totalPrice: 0
});

export function HomeProvider({children}) {
    const [isContactOpened, setIsContactOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [selectedAnalyzes, setSelectedAnalyzes] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    function toggleIsContactOpened() {
        setIsContactOpened(prevIsContactOpened => !prevIsContactOpened);
    }

    function toggleIsModalOpened() {
        setIsModalOpened(prevIsModalOpened => !prevIsModalOpened);
    }

    function addToSelectedAnalyze(selectedAnalyze) {
        setSelectedAnalyzes([...selectedAnalyzes, selectedAnalyze]);
    }

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
                setSelectedAnalyzes: addToSelectedAnalyze,
                totalPrice: totalPrice
            }}>
                {children}
        </HomeContext.Provider>
    )
}