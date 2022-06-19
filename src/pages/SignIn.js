import Login from 'components/Login';
import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SignIn.css';

const SignIn = () => {
    return (
        <div>
            <h1 className='greeting-msg'>Welcome back, Vestige!</h1>
            <Login></Login>
            <p className='signup-call'>Ya' still walkin' with soul? <Link className='link' to={'/signup'}>Try to lose it.</Link></p>
        </div>
    )
}

export default SignIn