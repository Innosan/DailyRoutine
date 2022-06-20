import React from 'react'
import { Link } from 'react-router-dom';

import Login from 'components/Login';

import '../style/SignIn.css';

const greetingPrefix = ['Good', 'Lovely', 'Fantastic', 'Pleasant'];

const timing = [
    [18, 'evening'],
    [12, 'day'],
    [6, 'morning'],
    [0, 'night']
]

let hours = new Date().getHours();
let pickedHour;

for (var i = 0; i < timing.length; i++) {
    if (hours >= timing[i][0]) {
        pickedHour = timing[i][1];
        break;
    }
}

let prefPicker = Math.floor(Math.random() * 4);

const SignIn = () => {
    return (
        <div className='wrapper'>
            <h1 className='greeting-msg'>{greetingPrefix[prefPicker]} {pickedHour}, Vestige!</h1>
            <Login></Login>
            <p className='signup-call'>Ya' still walkin' with soul? <Link className='link' to={'/signup'}>Try to lose it.</Link></p>
        </div>
    )
}

export default SignIn