import React, { useState } from 'react';

import classes from './Tabs.module.css';

const Tabs = ({selected, setSelectedItem, tabs, ...props}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const SCREEN_SIZE = 800;

    const reportWindowSize = () => {
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', reportWindowSize);


    const handleChange = (event) => {
        setSelectedItem(+event.target.value);
    }

    return (
        <div className={classes.wrapper}>
            {screenWidth > SCREEN_SIZE ?
            <ul className={classes.headers + " pr-8 md:mr-4 md:pb-4"}>
                {tabs.map((tab, index) => {
                    const isActive = selected === index ? 'font-bold' : '';

                    return (
                        <li
                            key={tab}
                            className={`text-lg md:text-base mb-4 text-primary-4 ${isActive}`} >
                                <a
                                    className="cursor-pointer"
                                    onClick={() => setSelectedItem(index)} >
                                    {tab}
                                </a>
                        </li>
                    )
                })}
            </ul> : <>
            <label htmlFor="instructiuni" className="opacity-75 text-xs">Alege proba biologică</label>
            <select
                name="instructiuni"
                id="instructiuni"
                className={classes.select + " w-full mb-6 mt-2 px-4 py-2 overflow-ellipsis bg-primary-6 text-primary-0"}
                onChange={e => handleChange(e)} >
                    {tabs.map((tab, index) => {
                        return (
                            <option
                                key={tab}
                                value={index}
                                title={tab}
                                className={classes.option + " text-primary-2"} >
                                    {tab}
                            </option>
                        )
                    })}
            </select></>}
            <div className="ml-8 md:ml-4 max-w-prose">
                {props.children}
            </div>
        </div>
    )
}

export default Tabs