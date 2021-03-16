import React, { useState, createContext } from 'react';

export const PreturiContext = createContext({
    isSummaryModalOpened: false
});

export function PreturiProvider({children}) {
    const [isSummaryModalOpened, setIsSummaryModalOpened] = useState(false);

    const toggleIsModalOpened = () => {
        setIsSummaryModalOpened(prevState => !prevState);
    }

    return (
        <PreturiContext.Provider value={{
            isSummaryModalOpened: isSummaryModalOpened,
            setIsSummaryModalOpened: toggleIsModalOpened
        }}>
                {children}
        </PreturiContext.Provider>
    )
};