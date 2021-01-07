import React, { useState, useEffect } from 'react';

import classes from './ProgressBar.module.css';

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', progressBarHandler);

        return () => window.removeEventListener('scroll', progressBarHandler);
    }, [])

    const progressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;

        setScroll(scroll);
    }

    return (
        <div className={classes.container} onClick={progressBarHandler}>
            <div
                className={classes.bar}
                style={{transform: `scale(${scroll}, 1)`}} />
        </div>
    )
};

export default ProgressBar;
