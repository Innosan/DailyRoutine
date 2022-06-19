import React from 'react'
import { Form } from './Form'
import { Navigator, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                history('/');
            })
            .catch(() => alert("Ебобо, аккаунта нет!"))
    }

    return (
        <Form title="login" handleClick={handleLogin}></Form>
    )
}

export default Login