import React from 'react';

const Tab = (props) => {
    if(props.isSelected) {
        return (
            <>
                {props.children}
                <p className="text-sm sm:text-xs col-span-2 text-right mt-8">
                    *extras din Manualul de recoltare şi transport al probelor primare
                </p>
            </>
        )
    }
    return null;
}

export default Tab;
