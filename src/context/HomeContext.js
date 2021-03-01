import React, { useContext, useState, createContext } from 'react';

const HomeContext = createContext();
const HomeContextUpdate = createContext();

export function useHomeContext() {
    return useContext(HomeContext);
}

export function useHomeContextUpdate() {
    return useContext(HomeContextUpdate);
}

export function HomeProvider({children}) {
    const [isContactOpened, setIsContactOpened] = useState(false);

    function toggleIsContactOpened() {
        setIsContactOpened(prevIsContactOpened => !prevIsContactOpened);
    }

    return (
        <HomeContext.Provider value={isContactOpened}>
            <HomeContextUpdate.Provider value={toggleIsContactOpened}>
                {children}
            </HomeContextUpdate.Provider>
        </HomeContext.Provider>
    )
}