// import React from "react";
// import "./style.css";

// import pic from "../../Assets/Assets/img8.PNG";
// import { FaStar } from "react-icons/fa";
// // import { faPersonMilitaryToPerson } from '@fortawesome/free-solid-svg-icons';
// import Button from "../button/Button";
// import { BsBookmark } from "react-icons/bs";

// function ProductItem(props) {
//     return ( <
//         div className = "card" >
//         <
//         img src = { pic }
//         /> <p> {props.paragraph}</p > { " " } <
//         div className = "star" >
//         <
//         FaStar / >
//         <
//         FaStar / >
//         <
//         FaStar / >
//         <
//         FaStar / >
//         <
//         FaStar / >
//         <
//         /div>{" "} <
//         h5 > { props.title } < /h5>{" "} <
//         div className = "add" >
//         <
//         BsBookmark style = {
//             {
//                 background: "#F2F2F2",
//                 height: "100%",
//                 borderRadius: "10px",
//                 padding: "0px 10px",
//             }
//         }
//         />{" "} <
//         Button isWhite = { true }
//         children = "add to cart" / >
//         <
//         /div>{" "} <
//         /div>
//     );
// }

// export default ProductItem;

import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
export default function ProductItem(props) {
    const { product } = props;
    console.log(product.id);
    return ( <
        div className = "card" >
        <
        img src = { product.image }
        className = "card-img-top"
        alt = "..." / >
        <
        div className = "card-body" >
        <
        p className = "card-title" > { product.title } < /p>{" "} <
        h5 className = "card-text" > Price { product.price }
        $ < /h5>{" "} <
        div className = "add" > { " " } <
        Link to = "/ProductDetails"
        href = { "/products/" + product.id }
        className = "btn btn-primary" >
        details { " " } <
        /Link>{" "} <
        BsBookmark style = {
            {
                background: "#F2F2F2",
                height: "100%",
                borderRadius: "10px",
                padding: "0px 10px",
            }
        }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}