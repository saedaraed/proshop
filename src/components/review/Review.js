import React from "react";
import "./style.css";
// import { FaUserAlt } from "react-icons/fa";
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
const review = [{
        id: 1,
        username: "Jenifer Medhurst",
        pargraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        date: "28th March 2022",
    },
    {
        id: 2,
        username: "Dr. Ward Farrell",
        pargraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        date: "28th March 2022",
    },
    {
        id: 3,
        username: "Edythe Heaney",
        pargraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        date: "21st February 2021",
    },
];

function Review() {
    return ( <
        div className = "Review" >
        <
        div className = "contentBorder" > { " " } <
        h3 > Reviews < /h3>{" "} <
        div className = "cont"
        active = "" > { " " } {
            review.map((user) => ( <
                div key = { user.id } >
                <
                h5 > { user.username } < /h5> <p>{user.pargraph}</p >
                <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Review;