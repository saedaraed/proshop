import React, { useState } from "react";
import "./style.css";
// import { FaSearch } from "react-icons/fa";

function Input(props) {
    const [value, setValue] = useState(props);
    const onChange = (event) => {
        setValue(event.target.value);
    };

    return ( <
        div className = "input" >
        <
        input value = { props.value }
        onChange = { onChange }
        />{" "} <
        /div>
    );
}

export default Input;