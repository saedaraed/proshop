import React, { useState } from "react";
import "./style.css";
import Button from "../button/Button";

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [checked, setChecked] = useState(true);

    function hanldeEmail(e) {
        setEmail(e.target.value);
    }

    function hanldePassword(e) {
        setPassword(e.target.value);
    }

    // function hanldeChecked(e) {
    //     setChecked(e.target.value);
    // };
    return ( <
        div className = "form" >
        <
        h2 > Login. < /h2>{" "} <
        p > Login with your data that you entered during registration < /p>{" "} <
        label > Enter your email address < /label>{" "} <
        input value = { email }
        onChange = { hanldeEmail }
        placeholder = "email" / >
        <
        label > Enter your password < /label>{" "} <
        input value = { password }
        type = { "password" }
        onChange = { hanldePassword }
        placeholder = { "password" }
        />{" "} <
        Button children = { "Login" }
        />{" "} <
        /div>
    );
}

export default Form;