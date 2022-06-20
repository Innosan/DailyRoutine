import { useDispatch } from "react-redux";
import React from 'react'
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from "firebase/database";

import { setUser } from '../store/slices/userSlice'

import { Form } from './Form'

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();

        let localUser;

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    refreshToken: user.refreshToken,
                }))
                localUser = { email: user.email, id: user.uid, token: user.accessToken, refreshToken: user.refreshToken};
                localStorage.setItem('user', JSON.stringify(localUser));

                writeUserData(user);
                
                history('/');

            })
            .catch(console.error)
    }

    return (
        <Form title="Sign Up" handleClick={handleRegister} />
    )
}

function writeUserData(user) {
  const db = getDatabase();
  set(ref(db, 'users/' + user.uid), {
    email: user.email,
    id: user.uid,
    token: user.accessToken,
  });
}

export { SignUpForm }