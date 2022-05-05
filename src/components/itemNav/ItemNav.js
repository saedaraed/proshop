import React from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ItemNav() {
    return ( <
        div className = "ItemNav" >
        <
        FaUserAlt / >
        <
        span >
        <
        Link to = "/loginForm" > Login < /Link> /
        Sign up { " " } <
        /span>{" "} <
        div >
        <
        BsFillBookmarkFill / >
        <
        span > Wishlist < /span>{" "} <
        /div>{" "} <
        div >
        <
        FaShoppingCart / >
        <
        Link to = "/Cart" > Cart < /Link>{" "} <
        /div>{" "} <
        /div>
    );
}

export default ItemNav;