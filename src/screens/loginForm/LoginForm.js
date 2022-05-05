import React from 'react';

import Form from '../../components/form/Form'
import pic from '../../Assets/Assets/Group 240.png';
import './style.css';

// import Slider from '../../components/slider/Slider'


function LoginForm() {
    return ( <
        div className = "Login flex " >
        <
        div className = 'contentBorder' >

        <
        Form / >

        <
        img src = { pic }
        />  < /div > <
        /
        div >
    );
}

export default LoginForm;