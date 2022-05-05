import React from "react";
import "./App.css";
import Home from "./screens/home/Home";
import LoginForm from "./screens/loginForm/LoginForm";
import Navbar from "./components/navbar/Navbar";
import Cart from "./screens/carts/Cart";
import ProductDetails from "./screens/productDetails/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "cont" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/loginForm"
        element = { < LoginForm / > }
        />{" "} <
        Route path = "/cart"
        element = { < Cart / > }
        />{" "} <
        Route path = "/productDetails/:id"
        element = { < ProductDetails / > }
        />{" "} <
        /Routes>{" "} <
        /div>{" "} <
        /div>{" "} <
        /Router>
    );
}

export default App;