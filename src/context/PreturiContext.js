import React, { useState, createContext } from 'react';

export const PreturiContext = createContext({
    totalPrice: 0,
    isSummaryModalOpened: false
});

export function PreturiProvider({children}) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isSummaryModalOpened, setIsSummaryModalOpened] = useState(false);

    return (
        <PreturiContext.Provider value={{
            totalPrice: totalPrice,
            setTotalPrice: setTotalPrice,
            isSummaryModalOpened: isSummaryModalOpened,
            setIsSummaryModalOpened: setIsSummaryModalOpened
        }}>
                {children}
        </PreturiContext.Provider>
    )
};
