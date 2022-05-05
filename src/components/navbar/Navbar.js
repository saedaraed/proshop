import React from "react";
import "./style.css";

import Input from "../input/Input";
import ItemNav from "../itemNav/ItemNav";
import { FaSearch } from "react-icons/fa";
// import { react - router }
// From "react-router-dom"

function Navbar() {
    return ( <
        div className = "navbar" >
        <
        div className = "container" >
        <
        p > { " " }
        Pro < span > Shop < /span>{" "} <
        /p>

        <
        div className = "input" >
        <
        Input / > { " " } <
        button > { " " } <
        FaSearch / >
        search { " " } <
        /button>{" "} <
        /div>

        <
        ItemNav / >
        <
        /div>{" "} <
        /div>
    );
}

export default Navbar;