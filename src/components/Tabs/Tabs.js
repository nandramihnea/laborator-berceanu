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
            <ul className={classes.headers + " md:mr-4 bg-primary-3 px-6 py-12"}>
                {tabs.map((tab, index) => {
                    const isActive = selected === index ? 'text-primary-9' : 'text-primary-0';

                    return (
                        <li
                            key={tab}
                            className={`text-xl md:text-base mb-4 ${isActive} tracking-wide font-medium`} >
                                <span
                                    className="cursor-pointer"
                                    onClick={() => setSelectedItem(index)} >
                                    {tab}
                                </span>
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
            <div className="py-6 pl-8 sm:pl-0 max-w-prose">
                {props.children}
            </div>
        </div>
    )
}

export default Tabs