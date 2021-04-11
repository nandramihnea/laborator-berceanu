import React from 'react'
import classes from './Tabs.module.css'

const Tabs = ({selected, setSelectedItem, tabs, ...props}) => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.headers + " pr-8 md:mr-4"}>
                {tabs.map((tab, index) => {
                    const isActive = selected === index ? 'font-bold' : '';

                    return (
                        <li
                            key={tab}
                            className={`text-lg md:text-base mb-3 text-primary-4 ${isActive}`} >
                                <a
                                    className="cursor-pointer"
                                    onClick={() => setSelectedItem(index)} >
                                    {tab}
                                </a>
                        </li>
                    )
                })}
            </ul>
            <div className="py-10 ml-8">
                {props.children}
            </div>
        </div>
    )
}

export default Tabs
