import { useDispatch } from "react-redux";
import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import React from 'react'
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                history('/');
            })
            .catch(console.error)
    }

    return (
        <Form title="Sign Up" handleClick={handleRegister} />
    )
}

export { SignUpForm }