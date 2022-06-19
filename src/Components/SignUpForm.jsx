import { useDispatch } from "react-redux";
import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import React from 'react'
import { useNavigate } from "react-router-dom";

import { getDatabase, set, ref } from "firebase/database";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleRegister = (email, password, name) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    displayName: name,
                    email: user.email,
                    userId: user.uid,
                    token: user.accessToken,
                }))
                writeUserData(user, name);
                history('/');

            })
            .catch(console.error)
    }

    return (
        <Form title="Sign Up" handleClick={handleRegister} />
    )
}

function writeUserData(user, name) {
  const db = getDatabase();
  set(ref(db, 'users/' + user.uid), {
    displayName: name,
    email: user.email,
    id: user.uid,
    token: user.accessToken,
  });
}

export { SignUpForm }