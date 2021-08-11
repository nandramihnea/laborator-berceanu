import React from 'react';

import Slider from "react-slick";

import classes from './Tabs.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tabs = ({selected, setSelectedItem, tabs, ...props}) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                slidesToShow: 3,
                slidesToScroll: 1,
            },
            {
                breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
                settings: 'unslick'
            }
        ]
    };

    return (
        <div className={classes.wrapper}>
            <ul className={classes.headers + " pr-8 md:pr-0 md:mr-0 md:pb-4"}>
                {/* <Slider {...settings}>
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
                </Slider> */}
            </ul>
            <div className="py-10 ml-8 md:ml-0">
                {props.children}
            </div>
        </div>
    )
}

export default Tabs