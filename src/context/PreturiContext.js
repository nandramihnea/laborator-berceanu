import React, { useState, createContext } from 'react';

export const PreturiContext = createContext({
    isSummaryModalOpened: false
});

export function PreturiProvider({children}) {
    const [isSummaryModalOpened, setIsSummaryModalOpened] = useState(false);

    return (
        <PreturiContext.Provider value={{
            isSummaryModalOpened: isSummaryModalOpened,
            setIsSummaryModalOpened: setIsSummaryModalOpened
        }}>
                {children}
        </PreturiContext.Provider>
    )
};
