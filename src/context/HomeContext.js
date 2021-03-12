import React, { useState, createContext } from 'react';

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

    function addToTotalPrice(newPrice) {
        console.log('totalPrice', totalPrice)
        setTotalPrice(totalPrice + newPrice);
    }

    return (
        <HomeContext.Provider value={{
                isContactOpened: isContactOpened,
                setIsContactOpened: toggleIsContactOpened,
                isModalOpened: isModalOpened,
                setIsModalOpened: toggleIsModalOpened,
                selectedAnalyzes: selectedAnalyzes,
                setSelectedAnalyzes: addToSelectedAnalyze,
                totalPrice: totalPrice,
                setTotalPrice: addToTotalPrice
            }}>
                {children}
        </HomeContext.Provider>
    )
}