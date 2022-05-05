import React from 'react';
import './style.css';


function Button({ isWhite, ...props }) {
    return ( <
        div className = "button" >

        <
        button {...props }
        className = { isWhite && "white" } > { props.children } < /button > < /
        div >

    );
}

export default Button;