import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

import Button from "../button/Button";

const data = [{
        id: 1,
        title: "PLAYSTATION 5",
        pargraph: "Pro cameras.Pro display. Pro performance.",
        image: "../../Assets/Assets/img1.PNG",
    },
    {
        id: 2,
        title: " APPLE AIRPODS",
        pargraph: "Lightning-fast download speed with super-fast SSD storage",
    },
    {
        id: 3,
        title: "IPHONE 11 PRO",
        pargraph: "Pro cameras.Pro display. Pro performance.",
    },
];

function Slider() {
    //   const [active, setActive] = useState("");
    return ( <
        Swiper spaceBetween = { 30 }
        pagination = {
            {
                clickable: true,
            }
        }
        modules = {
            [Pagination] }
        className = "mySwiper" >
        { " " } {
            data.map((headerSlide) => ( <
                SwiperSlide key = { headerSlide.id }
                className = "slide" >
                <
                div className = " container" >
                <
                div className = "pare" >
                <
                div className = "slider-content" >
                <
                h1 > { headerSlide.title } < /h1> <p>{headerSlide.pargraph}</p >
                <
                Button
                //   onClick={() => setActive("")}
                children = { "SHOP NOW" }
                />{" "} <
                /div>{" "} <
                div className = "slider-image" > { " " } <
                img src = { headerSlide.image }
                />{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>{" "} <
                /SwiperSlide>
            ))
        } { " " } <
        /Swiper>
    );
}

export default Slider;