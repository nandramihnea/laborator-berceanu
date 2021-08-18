import React, { useState, createContext } from 'react';

export const PreturiContext = createContext({
    isSummaryModalOpened: false,
    isSearch: false
});

export function PreturiProvider({children}) {
    const [isSummaryModalOpened, setIsSummaryModalOpened] = useState(false);
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);

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
            setIsSearchEmpty: toggleIsSearchEmpty
        }}>
                {children}
        </PreturiContext.Provider>
    )
};
