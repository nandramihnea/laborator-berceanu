import React, { useState, createContext } from 'react';

export const HomeContext = createContext({
    isContactOpened: false,
    isModalOpened: false,
    selectedAnalyzes: null
});

export function HomeProvider({children}) {
    const [isContactOpened, setIsContactOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [selectedAnalyzes, setSelectedAnalyzes] = useState([]);

    function toggleIsContactOpened() {
        setIsContactOpened(prevIsContactOpened => !prevIsContactOpened);
    }

    function toggleIsModalOpened() {
        setIsModalOpened(prevIsModalOpened => !prevIsModalOpened);
    }

    function addToSelectedAnalyze(selectedAnalyze) {
        setSelectedAnalyzes([...selectedAnalyzes, selectedAnalyze]);
    }

    return (
        <HomeContext.Provider value={{
                isContactOpened: isContactOpened,
                setIsContactOpened: toggleIsContactOpened,
                isModalOpened: isModalOpened,
                setIsModalOpened: toggleIsModalOpened,
                selectedAnalyzes: selectedAnalyzes,
                setSelectedAnalyzes: addToSelectedAnalyze
            }}>
                {children}
        </HomeContext.Provider>
    )
}